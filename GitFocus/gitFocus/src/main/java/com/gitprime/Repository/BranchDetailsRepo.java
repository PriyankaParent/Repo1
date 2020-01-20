package com.gitprime.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gitprime.DTO.BranchDetailsDTO;

@Repository
public interface BranchDetailsRepo extends CrudRepository<BranchDetailsDTO, String> {

}
