package com.picker.trip.api;

import com.picker.trip.model.DefaultRes;
import com.picker.trip.service.TourApiService;
import com.picker.trip.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.picker.trip.model.DefaultRes.FAIL_DEFAULT_RES;

@Slf4j
@RestController
public class ItemController {
    private final UserService userService;
    private final TourApiService tourApiService;

    public ItemController(final UserService userService, final TourApiService tourApiService) {
        this.userService = userService;
        this.tourApiService = tourApiService;
    }

    /*
    @GetMapping("/items")
    public ResponseEntity<DefaultRes> getAllItems(@PathVariable("userIdx") final int userIdx ) {
        try {
            return new ResponseEntity<>(userService.validateEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    */
}
