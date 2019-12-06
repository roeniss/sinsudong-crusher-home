package com.picker.trip.api;

import com.picker.trip.model.DefaultRes;

import com.picker.trip.service.ItemService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.picker.trip.model.DefaultRes.FAIL_DEFAULT_RES;

@Slf4j
@RestController
public class ItemController {

    private final ItemService itemService;

    public ItemController(final ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/items")
    public ResponseEntity<DefaultRes> getAllItems(@RequestParam("userIdx") final int userIdx,
                                                  @RequestParam("isSelected") final boolean isSelected) {
        try {
            return new ResponseEntity<>(itemService.findAllItems(userIdx, isSelected), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/items/detail")
    public ResponseEntity<DefaultRes> getItem(@RequestParam("userIdx") final int userIdx,
                                              @RequestParam("isSelected") final boolean isSelected,
                                              @RequestParam("contentIdx") final int contentIdx) {
        try {
            return new ResponseEntity<>(itemService.findSpecItem(userIdx, contentIdx, isSelected), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
