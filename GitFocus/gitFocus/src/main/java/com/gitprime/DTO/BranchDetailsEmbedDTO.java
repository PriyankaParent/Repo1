package com.gitprime.DTO;

	import java.io.Serializable;

	import javax.persistence.Column;
	import javax.persistence.Embeddable;

	@Embeddable
	public class BranchDetailsEmbedDTO implements Serializable {

		private static final long serialVersionUID = 1L;
		
		
		@Column(name = "repo_id")
		private Integer repoId;
		
		@Column(name = "branch_name")
		private String branchName;
		
		 public BranchDetailsEmbedDTO()
		 {
		 
		 }
		 
		 public BranchDetailsEmbedDTO(int repoId, String branchName) {
		        this.repoId = repoId;
		        this.branchName = branchName;
		    }
		 
		public Integer getRepoId() {
			return repoId;
		}
		public void setRepoId(Integer repoId) {
			this.repoId = repoId;
		}
		public String getBranchName() {
			return branchName;
		}
		public void setBranchName(String branchName) {
			this.branchName = branchName;
		}

	}


