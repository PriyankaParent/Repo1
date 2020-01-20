package com.gitprime.DTO;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "repo_master", schema = "gitschema")

public class RepoDetailsDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "repo_id")
	private int repoId;
	
	@Column(name = "repo_name")
	private String repoName;
	
	@Column(name = "repo_owner")
	private String repoOwner;
	
	@Column(name = "created_date")
	private Timestamp createdDate;

	
	public int getRepoId() {
		return repoId;
	}

	
	public void setRepoId(int repoId) {
		this.repoId = repoId;
	}

	public String getRepoName() {
		return repoName;
	}

	public void setRepoName(String repoName) {
		this.repoName = repoName;
	}

	public String getRepoOwner() {
		return repoOwner;
	}

	
	public void setRepoOwner(String repoOwner) {
		this.repoOwner = repoOwner;
	}

	public Timestamp getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}
	
	@Override
	public String toString() {
		return "RepoDetailsDTO [id=" + repoId + ", repoName=" + repoName + ", repoOwner=" + repoOwner + ", "
				+ "createdDate=" + createdDate + "]";
	}
	
}
