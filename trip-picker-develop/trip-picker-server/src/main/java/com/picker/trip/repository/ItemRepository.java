package com.picker.trip.repository;

import com.picker.trip.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface ItemRepository  extends JpaRepository<Item, Integer> {
    Optional<Item> findByContentIdx(int userIdx);

    @Transactional
    void deleteByContentIdx(int contentIdx);
}
