package com.picker.trip.api;

import com.picker.trip.domain.User;
import com.picker.trip.domain.UserLocation;
import com.picker.trip.domain.UserPersonality;
import com.picker.trip.domain.UserPreference;

import com.picker.trip.model.DefaultRes;

import com.picker.trip.service.TourApiService;
import com.picker.trip.service.UserService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import static com.picker.trip.model.DefaultRes.FAIL_DEFAULT_RES;

@Slf4j
@RestController
public class UserController {

    private final UserService userService;
    private final TourApiService tourApiService;

    public UserController(final UserService userService, final TourApiService tourApiService) {
        this.userService = userService;
        this.tourApiService = tourApiService;
    }

    /**
     * 회원가입
     * @param user
     * @return ResponseEntity<DefaultRes>
     */
    @PostMapping("/users/signup")
    public ResponseEntity<DefaultRes> signup(@RequestBody final User user) {
        try {
            return new ResponseEntity<>(userService.saveUser(user), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 이메일 중복 확인
     * @param email
     * @return ResponseEntity<DefaultRes>
     */
    @GetMapping("/users/check")
    public ResponseEntity<DefaultRes> checkEmail(@RequestParam("email") final String email) {
        try {
            return new ResponseEntity<>(userService.validateEmail(email), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 선호 정보 저장
     * @param userPreference
     * @return ResponseEntity<DefaultRes>
     */
    @PostMapping("/users/preferences")
    public ResponseEntity<DefaultRes> saveUserPreference(@RequestBody final UserPreference userPreference) {
        try {
            return new ResponseEntity<>(userService.saveUserPreference(userPreference), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 선호 정보 조회
     * @param userIdx
     * @return ResponseEntity<DefaultRes>
     */
    @GetMapping("/users/preferences/{userIdx}")
    public ResponseEntity<DefaultRes> getUserPreference(@PathVariable("userIdx") final int userIdx) {
        try {
            return new ResponseEntity<>(userService.findUserPreferenceByUserIdx(userIdx), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 선택 지역 저장
     * @param userLocation
     * @return ResponseEntity<DefaultRes>
     */
    @PostMapping("/users/locations")
    public ResponseEntity<DefaultRes> saveUserLocation(@RequestBody final UserLocation userLocation) {
        try {
            return new ResponseEntity<>(userService.saveUserLocation(userLocation), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 선택 지역 조회
     * @param userIdx
     * @return ResponseEntity<DefaultRes>
     */
    @GetMapping("/users/locations/{userIdx}")
    public ResponseEntity<DefaultRes> getUserLocation(@PathVariable("userIdx") final int userIdx) {
        try {
            return new ResponseEntity<>(userService.findUserLocationByUserIdx(userIdx), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 퍼스널리티 정보 저장
     * @param userPersonality
     * @return ResponseEntity<DefaultRes>
     */
    @PostMapping("/users/personalities")
    public ResponseEntity<DefaultRes> saveUserPersonality(@RequestBody final UserPersonality userPersonality) {
        try {
            return new ResponseEntity<>(userService.saveUserPersonality(userPersonality), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 회원 퍼스널리티 정보 조회
     * @param userIdx
     * @return ResponseEntity<DefaultRes>
     */
    @GetMapping("/users/personalities/{userIdx}")
    public ResponseEntity<DefaultRes> getUserPersonality(@PathVariable("userIdx") final int userIdx) {
        try {
            return new ResponseEntity<>(userService.findUserPersonalityByUserIdx(userIdx), HttpStatus.OK);
        } catch (Exception e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(FAIL_DEFAULT_RES, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}