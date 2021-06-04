import { Component, OnInit } from '@angular/core';
import { Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  imgURL;
  constructor(
    private camera: Camera
  ) { }

  ngOnInit() {
  }

  getCamera()
  {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI
    }
    ).then( (res) => {
      this.imgURL="data:image/jpeg:base64," + res;
    }).catch(e => {
      console.log(e);
    })

  }

  getGallery()
  
  {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL
    }  
    ).then( (res) => {
      this.imgURL=res;
    }).catch(e => {
      console.log(e);
    })
  }
}
function sourceType(sourceType: any, CAMERA: number) {
  throw new Error('Function not implemented.');
}

