package com.gitprime.DTO;

import java.io.Serializable;
import java.sql.Timestamp;


import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "branch_details", schema = "gitschema")


public class BranchDetailsDTO implements Serializable{

		private static final long serialVersionUID = 1L;
        
		@EmbeddedId
		private BranchDetailsEmbedDTO branchEmbedId;
		
		@ManyToOne
		@JoinColumn(name = "repo_id", referencedColumnName = "repo_id",insertable = false,updatable = false)
		
		private RepoDetailsDTO master;
		
		@Column(name = "branch_owner")
		private String branchOwner;
		
		@Column(name = "created_date")
		private Timestamp createdDate;

		@Column(name = "parent_branch")
		private String parentBranch;
		

		public BranchDetailsEmbedDTO getBranchEmbedId() {
			return branchEmbedId;
		}

		public void setBranchEmbedId(BranchDetailsEmbedDTO branchEmbedId) {
			this.branchEmbedId = branchEmbedId;
		}

		public String getBranchOwner() {
			return branchOwner;
		}

		public void setBranchOwner(String branchOwner) {
			this.branchOwner = branchOwner;
		}

		public Timestamp getCreatedDate() {
			return createdDate;
		}

		public void setCreatedDate(Timestamp createdDate) {
			this.createdDate = createdDate;
		}

		public String getParentBranch() {
			return parentBranch;
		}

		public void setParentBranch(String parentBranch) {
			this.parentBranch = parentBranch;
		}
/*
		public RepoDetailsDTO getMaster() {
			return master;
		}

		public void setMaster(RepoDetailsDTO master) {
			this.master = master;
		}
	*/


	}
