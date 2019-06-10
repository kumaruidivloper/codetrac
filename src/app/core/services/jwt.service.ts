import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken() {
    // return window.localStorage['jwtToken'];
    return JSON.parse(window.localStorage.getItem('jwtToken'));
  }

  saveToken(data) {
    console.log('<<', data);
    // window.localStorage['jwtToken'] = token;
    window.localStorage.setItem('jwtToken', JSON.stringify(data));
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  // TODO: Save method should made generic to store all kinds of data and remove saveData method once
  // there is a generic save method, that should be the case for get and remove also.
  saveOrgData(data) {
    window.localStorage.orgName = data;
  }

  getOrgData() {
    return window.localStorage.orgName;
  }

  // create course file id Save start
  saveCourseGuideId(data) {
    window.localStorage.create_course_guide_fileId = data;
  }

  getCourseGuideId() {
    return window.localStorage.create_course_guide_fileId;
  }

  saveCourseHandbookId(data) {
    window.localStorage.create_course_handbook_fileId = data;
  }

  getCourseHandbookId() {
    return window.localStorage.create_course_handbook_fileId;
  }

  saveCourseLogoId(data) {
    window.localStorage.create_course_logo_img_fileId = data;
  }

  getCourseLogoId() {
    return window.localStorage.create_course_logo_img_fileId;
  }

  saveCoverPhotoId(data) {
    window.localStorage.create_course_cover_img_fileId = data;
  }

  getCoverPhotoId() {
    return window.localStorage.create_course_cover_img_fileId;
  }

  saveCreatedCourseId(data) {
    window.localStorage.created_courseId = data;
  }

  getCreatedCourseId() {
    return window.localStorage.created_courseId;
  }

  saveCreatedCourseTitle(data) {
    window.localStorage.created_courseTitle = data;
  }

  getCreatedCourseTitle() {
    return window.localStorage.created_courseTitle;
  }

  saveCreatedModuleId(data) {
    window.localStorage.created_ModuleId  = data;
  }

  getCreatedModuleId() {
    return  window.localStorage.created_ModuleId;
  }

  store_domain_details(data) {
    window.localStorage.setItem('domain_details', JSON.stringify(data));
  }

  store_registry_details(data) {
    window.localStorage.setItem('registry_details', data);
  }

  get_registry_details() {
    return window.localStorage.registry_details;
  }

  store_settings(data) {
    window.localStorage.setItem('user_settings', JSON.stringify(data));
  }
  logout_clear_storage() {

    let language = '';
    if (!localStorage.getItem('language')) {
        language = 'en';
    } else {
      language = localStorage.getItem('language');
    }

    window.localStorage.clear();
    localStorage.setItem('language', language);
  }

}
