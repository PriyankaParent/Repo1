package com.gitprime.DTO;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "commit_master", schema = "gitschema")


public class CommitMasterDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "sha_id")
	private String shaId;
	
	@Column(name = "repo_id")
	private int repoId;
	
	@Column(name = "branch_name")
	private String branchName;
	
	@Column(name = "commit_date")
	private Timestamp commitDate;
	
	@Column(name = "user_id")
	private String userId;
	
	@Column(name = "message")
	private String commitMessage;

	public String getShaId() {
		return shaId;
	}

	public void setShaId(String shaId) {
		this.shaId = shaId;
	}

	public int getRepoId() {
		return repoId;
	}

	public void setRepoId(int repoId) {
		this.repoId = repoId;
	}

	public String getBranchName() {
		return branchName;
	}

	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}

	public Timestamp getCommitDate() {
		return commitDate;
	}

	public void setCommitDate(Timestamp commitDate) {
		this.commitDate = commitDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCommitMessage() {
		return commitMessage;
	}

	public void setCommitMessage(String commitMessage) {
		this.commitMessage = commitMessage;
	}
	
}
