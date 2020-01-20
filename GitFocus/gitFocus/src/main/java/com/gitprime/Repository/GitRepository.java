package com.gitprime.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gitprime.DTO.RepoDetailsDTO;

@Repository
public interface GitRepository extends CrudRepository<RepoDetailsDTO, String> {

	@Query(value = "select repo_name,repo_id from gitschema.repo_master", nativeQuery = true)
	List<Object[]> getRepoId( String repoName, int repoId);
}