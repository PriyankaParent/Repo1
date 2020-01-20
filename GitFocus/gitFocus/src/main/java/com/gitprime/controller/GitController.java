package com.gitprime.controller;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.gitprime.DTO.BranchDetailsDTO;
import com.gitprime.DTO.BranchDetailsEmbedDTO;
import com.gitprime.DTO.CommitMasterDTO;
import com.gitprime.DTO.RepoDetailsDTO;
import com.gitprime.Repository.BranchDetailsRepo;
import com.gitprime.Repository.CommitDetailsRepo;
import com.gitprime.Repository.CommitMasterRepo;
import com.gitprime.Repository.GitRepository;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@RestController

public class GitController {

	@Autowired

	private GitRepository gitRepo;
	
	@Autowired

	private BranchDetailsRepo branchInfo;

	@Autowired

	private CommitMasterRepo commitMasterRepo;
	
	@Autowired

	private CommitDetailsRepo commitDetailsRepo;
	

	@RequestMapping("/gitprime/insertrepomaster")

	public List < RepoDetailsDTO > getRepoDetails() {

	    final String reposUri = "https://api.github.com/repos/dagdashboard/TRDashboard?access_token=8145e024f834e7c180f9cdfb55b2e9b62ca6d258";

	    String reposResult = null;

	   // String contributorsResult = null;

	    RestTemplate restTemplate = new RestTemplate();

	    reposResult = restTemplate.getForObject(reposUri, String.class);

	    List < RepoDetailsDTO > repoDetailsList = new ArrayList < > ();
	    

		try {

	        JSONArray jsonReposArray = new JSONArray(reposResult);

	        System.out.println(jsonReposArray);

	        for (int i = 0; i < jsonReposArray.length(); i++) {
	        	
	        	RepoDetailsDTO repoDetails = new RepoDetailsDTO();


	            JSONObject repoObj = jsonReposArray.getJSONObject(i);

	            //System.out.println(repoObj);

	            int repoid = repoObj.getInt("id");
	            
	           // System.out.println(repoid);
	            
	            String reponame = repoObj.getString("name");

	           // System.out.println(reponame);

	            String createTimeStamp = repoObj.getString("created_at");

	            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

	            dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));

	            java.util.Date d1;

	            Timestamp timestamp = null;
	            
	            JSONObject repoObj1 = repoObj.getJSONObject("owner");
	            
	            String repoOwner = repoObj1.getString("login");

	            try {

	                //2019-05-23T10:16:10Z 

	                d1 = dateFormat.parse(createTimeStamp);



	                timestamp = new java.sql.Timestamp(d1.getTime());



	                //System.out.println(timestamp);

	            } catch (ParseException e) {

	                // TODO Auto-generated catch block

	                e.printStackTrace();

	            }
	            
	            repoDetails.setRepoId(repoid);

                repoDetails.setRepoName(reponame);
                
                repoDetails.setRepoOwner(repoOwner);

                repoDetails.setCreatedDate(timestamp);
                
                repoDetailsList.add(repoDetails);
                
                System.out.println(repoDetailsList);
                
                gitRepo.saveAll(repoDetailsList);
	        }
		}
                

		  catch (JSONException e) {

		        // TODO Auto-generated catch block

		        e.printStackTrace();

		    }
		return repoDetailsList;
	}

	

	@RequestMapping("/gitprime/insertbranchdetails")

	public List < BranchDetailsDTO > getBranchDetails() {

	    final String branchesUri = "https://api.github.com/repos/dagdashboard/TRDashboard/branches?access_token=8145e024f834e7c180f9cdfb55b2e9b62ca6d258";

	    String branchesResult = null;

	    RestTemplate restTemplate = new RestTemplate();

	    branchesResult = restTemplate.getForObject(branchesUri, String.class);

	    List < BranchDetailsDTO > branchDetailsList = new ArrayList < > ();
	    

		try {

	        JSONArray jsonBranchesArray = new JSONArray(branchesResult);

	        System.out.println(jsonBranchesArray);

	        for (int i = 0; i < jsonBranchesArray.length(); i++) {
	        	
	        	BranchDetailsDTO branchDetails = new BranchDetailsDTO();
	        	

	            JSONObject branchObj = jsonBranchesArray.getJSONObject(i);

	            String branchname = branchObj.getString("name");	            
	           
	            branchDetails.setBranchEmbedId(new BranchDetailsEmbedDTO(220401612, branchname));

                branchDetails.setBranchOwner("");

                branchDetails.setCreatedDate(null);
				
				branchDetails.setParentBranch("");
                
                branchDetailsList.add(branchDetails);
                
                System.out.println(branchDetailsList);
                
                branchInfo.saveAll(branchDetailsList);
	        }
		}
                

		  catch (JSONException e) {

		        // TODO Auto-generated catch block

		        e.printStackTrace();

		    }
		return branchDetailsList;
	}
	

	@RequestMapping("/gitprime/TRDashboard/insertcommitmaster")

	public List < CommitMasterDTO > getCommitInfo() {

	    final String commitsUri = "https://api.github.com/repos/dagdashboard/TRDashboard/commits?access_token=8145e024f834e7c180f9cdfb55b2e9b62ca6d258";

	    String commitsResult = null;
		
	    RestTemplate restTemplate = new RestTemplate();

	    commitsResult = restTemplate.getForObject(commitsUri, String.class);

	    List < CommitMasterDTO > commitMasterList = new ArrayList < > ();

		try {
			
				JSONArray jsonCommitsArray = new JSONArray(commitsResult);

	        System.out.println(jsonCommitsArray);

	        for (int i = 0; i < jsonCommitsArray.length(); i++) {
	        	

				CommitMasterDTO commitMaster = new CommitMasterDTO();

	            JSONObject commitObj = jsonCommitsArray.getJSONObject(i);

	            String shaid = commitObj.getString("sha");

	            
	            JSONObject commitObj1 = commitObj.getJSONObject("commit");
				JSONObject commitObj2 = commitObj1.getJSONObject("author");
	            
	            String commitUser = commitObj2.getString("name");
				String commitDate = commitObj2.getString("date");
				String commitMsg = commitObj1.getString("message");
				
				
	            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

	            dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));

	            java.util.Date d1;

	            Timestamp timestamp = null;

	            try {

	                //2019-05-23T10:16:10Z 

	                d1 = dateFormat.parse(commitDate);



	                timestamp = new java.sql.Timestamp(d1.getTime());



	                //System.out.println(timestamp);

	            } catch (ParseException e) {

	                // TODO Auto-generated catch block

	                e.printStackTrace();

	            }
				
				
                commitMaster.setShaId(shaid);
	            
	            commitMaster.setRepoId(220401612);
                
                commitMaster.setBranchName("");
				
				commitMaster.setUserId(commitUser);

                commitMaster.setCommitDate(timestamp);
				
				commitMaster.setCommitMessage(commitMsg);
                
                commitMasterList.add(commitMaster);
                
                commitMasterRepo.save(commitMaster);
	        }
		}
                

		  catch (JSONException e) {

		        // TODO Auto-generated catch block

		        e.printStackTrace();

		    }
		return commitMasterList;
	}
	
}


