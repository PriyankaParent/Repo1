package com.gitprime.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gitprime.DTO.CommitDetailsDTO;

@Repository
public interface CommitDetailsRepo extends CrudRepository<CommitDetailsDTO, String> {

}

