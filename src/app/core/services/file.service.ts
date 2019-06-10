import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class FileService {

  //private img_upload_Url = environment.logouploadendpoint + 'organization/logoUpload';

  constructor(private http: HttpClient,
              private jwtService: JwtService) {}

  uploadImage(data) {
    let accessToken;
    // TODO - Getting access token can be in seperate method and sendData should be in common API.
    const localStorageData = this.jwtService.getToken();
    if (localStorageData.length !== 0 && localStorageData.access_token) {
      accessToken = 'Bearer' + ' ' + localStorageData.access_token;
    }
    const imgUploadHeaders = {
      Authorization: `${accessToken}`
    };

    console.log('Token', accessToken);
    console.log(imgUploadHeaders);

    // return this.http.post<any>(this.img_upload_Url, data, {
    //   headers: img_upload_headers
    // });
  }
  uploadCourseImage(data) {
    let accessToken;
    // TODO - Getting access token can be in seperate method and sendData should be in common API.
    const localStorageData = this.jwtService.getToken();
    if (localStorageData.length !== 0 && localStorageData.access_token) {
      accessToken = 'Bearer' + ' ' + localStorageData.access_token;
    }
    const imgUploadHeaders = {
      Authorization: `${accessToken}`
    };

    console.log('Token', accessToken);
    console.log(imgUploadHeaders);

    // return this.http.post<any>(this.course_img_upload_Url, data, {
    //   headers: imgUploadHeaders
    // });
  }


   uploadPdf(data) {
    let accessToken;
    // TODO - Getting access token can be in seperate method and sendData should be in common API.
    const localStorageData = this.jwtService.getToken();
    if (localStorageData.length !== 0 && localStorageData.access_token) {
      accessToken = 'Bearer' + ' ' + localStorageData.access_token;
    }
    const imgUploadHeaders = {
      Authorization: `${accessToken}`
    };

    console.log('Token', accessToken);
    console.log(imgUploadHeaders);

    // return this.http.post<any>(this.uploadCurriculumPdfurl, data, {
    //   headers: imgUploadHeaders
    // });
   }

  validateUploadDocsizeinBytes(fileSize: number, MaxSize: number) {
    if (fileSize > MaxSize) {
      return false;
    } else {
      return true;
    }
  }

  validateUploadLogoSize(Height: number, Width: number, maxHeight: number, maxWidth: number) {
    if ((Height > maxHeight) && (Width > maxWidth)) {
      return false;
    } else {
      return true;
    }
  }
}
