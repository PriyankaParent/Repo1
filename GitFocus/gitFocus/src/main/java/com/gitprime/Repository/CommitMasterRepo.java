package com.gitprime.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gitprime.DTO.CommitMasterDTO;

@Repository
public interface CommitMasterRepo extends CrudRepository<CommitMasterDTO, String> {

}

