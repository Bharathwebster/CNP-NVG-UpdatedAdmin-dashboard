import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-toolcatagory',
  templateUrl: './toolcatagory.component.html',
  styleUrls: ['./toolcatagory.component.css']
})
export class ToolcatagoryComponent implements OnInit {
  
  [x: string]:any;

  
//   idToken = localStorage.getItem('csrftoken');
apiRoot: string = "http://152.135.122.61:8871";
//  apiRoot: string = "http://152.135.122.61:8871";
//options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.cookie.get('csrftoken')}) };
  
  constructor(private _data1:DataService,private http:HttpClient,) { }
//   options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.idToken})};

  ngOnInit() {

    setInterval(()=>{
        this.clock = Date.now();
      },1000);


      this.http.get(this.apiRoot+'/api/tool_category_data/150/').subscribe(data =>{
        this._labListed1_NVG = data as [any];
        if (this._labListed1_NVG.Tool_efficiency === false) {
          $('#lab1_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1_NVG.Tool_efficiency === true) {
          $('#lab1_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab1_NVG").hover(()=>{
          if (this._labListed1_NVG.Tool_Category === "Qualifications") {
              $('#lab1_NVG').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed1_NVG.Tool_Category === "Field Issues") {
              $('#lab1_NVG').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed1_NVG.Tool_Category === "Process") {
              $('#lab1_NVG').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed1_NVG.Tool_efficiency === false) {
              $('#lab1_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed1_NVG.Tool_efficiency === true) {
              $('#lab1_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })

    this.labData2_NVG = this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      console.log(data);
      this._labListed2_NVG = data as [any];
      if (this._labListed2_NVG.Tool_efficiency === false) {
        $('#lab2_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed2_NVG.Tool_efficiency === true) {
        $('#lab2_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab2_NVG").hover(()=>{
        if (this._labListed2_NVG.Tool_Category === "Qualifications") {
            $('#lab2_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed2_NVG.Tool_Category === "Field Issues") {
            $('#lab2_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed2_NVG.Tool_Category === "Process") {
            $('#lab2_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed2_NVG.Tool_efficiency === false) {
            $('#lab2_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed2_NVG.Tool_efficiency === true) {
            $('#lab2_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    

    this.http.get(this.apiRoot+'/api/tool_category_data/145/').subscribe(data =>{
      this._labListed3_INN = data as [any];
      if (this._labListed3_NVG.Tool_efficiency === false) {
        $('#lab3_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed3_NVG.Tool_efficiency === true) {
        $('#lab3_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
      $("#lab3_NVG").hover(()=>{
        if (this._labListed3_NVG.Tool_Category === "Qualifications") {
            $('#lab3_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed3_NVG.Tool_Category === "Field Issues") {
            $('#lab3_NVG').css("fill", "rgb(255, 193, 203)");
        }
        else if (this._labListed3_NVG.Tool_Category === "Process") {
            $('#lab3_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed3_NVG.Tool_efficiency === false) {
            $('#lab3_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed3_NVG.Tool_efficiency === true) {
            $('#lab3_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })


    this.http.get(this.apiRoot+'/api/tool_category_data/152/').subscribe(data =>{
      this._labListed4_NVG = data as [any];
      if (this._labListed4_NVG.Tool_efficiency === false) {
        $('#lab4_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed4_NVG.Tool_efficiency === true) {
        $('#lab4_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab4_NVG").hover(()=>{
        if (this._labListed4_NVG.Tool_Category === "Qualifications") {
            $('#lab4_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed4_NVG.Tool_Category === "Field Issues") {
            $('#lab4_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed4_NVG.Tool_Category === "Process") {
            $('#lab4_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed4_NVG.Tool_efficiency === false) {
            $('#lab4_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed4_NVG.Tool_efficiency === true) {
            $('#lab4_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
        console.log(data);
        this._labListed5_NVG = data as [any];
        if (this._labListed5_NVG.Tool_efficiency === false) {
          $('#lab5_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed5_NVG.Tool_efficiency === true) {
          $('#lab5_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab5_NVG").hover(()=>{
          if (this._labListed5_NVG.Tool_Category === "Qualifications") {
              $('#lab5_NVG').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed5_NVG.Tool_Category === "Field Issues") {
              $('#lab5_NVG').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed5_NVG.Tool_Category === "Process") {
              $('#lab5_NVG').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed5_NVG.Tool_efficiency === false) {
              $('#lab5_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed5_NVG.Tool_efficiency === true) {
              $('#lab5_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
  
      this.http.get(this.apiRoot+'/api/tool_category_data/150/').subscribe(data =>{
        console.log(data);
        this._labListed6_NVG = data as [any];
        if (this._labListed6_NVG.Tool_efficiency === false) {
          $('#lab6_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed6_NVG.Tool_efficiency === true) {
          $('#lab6_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab6_NVG").hover(()=>{
          if (this._labListed6_NVG.Tool_Category === "Qualifications") {
              $('#lab6_NVG').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed6_NVG.Tool_Category === "Field Issues") {
              $('#lab6_NVG').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed6_NVG.Tool_Category === "Process") {
              $('#lab6_NVG').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed6_NVG.Tool_efficiency === false) {
              $('#lab6_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed6_NVG.Tool_efficiency === true) {
              $('#lab6_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
    
  

    this.http.get(this.apiRoot+'/api/tool_category_data/149/').subscribe(data =>{
      this._labListed7_NVG = data as [any];
      if (this._labListed7_NVG.Tool_efficiency === false) {
        $('#lab7_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed7_NVG.Tool_efficiency === true) {
        $('#lab7_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab7_NVG").hover(()=>{
        if (this._labListed7_NVG.Tool_Category === "Qualifications") {
            $('#lab7_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed7_NVG.Tool_Category === "Field Issues") {
            $('#lab7_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed7_NVG.Tool_Category === "Process") {
            $('#lab7_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed7_NVG.Tool_efficiency === false) {
            $('#lab7_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed7_NVG.Tool_efficiency === true) {
            $('#lab7_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/151/').subscribe(data =>{
        this._labListed8_NVG = data as [any];
        if (this._labListed8_NVG.Tool_efficiency === false) {
          $('#lab8_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed8_NVG.Tool_efficiency === true) {
          $('#lab8_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab8_NVG").hover(()=>{
          if (this._labListed8_NVG.Tool_Category === "Qualifications") {
              $('#lab8_NVG').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed8_NVG.Tool_Category === "Field Issues") {
              $('#lab8_NVG').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed8_NVG.Tool_Category === "Process") {
              $('#lab8_NVG').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed8_NVG.Tool_efficiency === false) {
              $('#lab8_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed8_NVG.Tool_efficiency === true) {
              $('#lab8_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
  


    this.http.get(this.apiRoot+'/api/tool_category_data/155/').subscribe(data =>{
      this._labListed9_NVG = data as [any];
      if (this._labListed9_NVG.Tool_efficiency === false) {
        $('#lab9_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed9_NVG.Tool_efficiency === true) {
        $('#lab9_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab9_NVG").hover(()=>{
        if (this._labListed9_NVG.Tool_Category === "Qualifications") {
            $('#lab9_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed9_NVG.Tool_Category === "Field Issues") {
            $('#lab9_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed9_NVG.Tool_Category === "Process") {
            $('#lab9_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed9_NVG.Tool_efficiency === false) {
            $('#lab9_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed9_NVG.Tool_efficiency === true) {
            $('#lab9_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/154/').subscribe(data =>{
      this._labListed10_NVG = data as [any];
      if (this._labListed10_NVG.Tool_efficiency === false) {
        $('#lab10_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed10_NVG.Tool_efficiency === true) {
        $('#lab10_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab10_NVG").hover(()=>{
        if (this._labListed10_NVG.Tool_Category === "Qualifications") {
            $('#lab10_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed10_NVG.Tool_Category === "Field Issues") {
            $('#lab10_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed10_NVG.Tool_Category === "Process") {
            $('#lab10_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed10_NVG.Tool_efficiency === false) {
            $('#lab10_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed10_NVG.Tool_efficiency === true) {
            $('#lab10_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
      this._labListed11_NVG = data as [any];
      if (this._labListed11_NVG.Tool_efficiency === false) {
        $('#lab11_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed11_NVG.Tool_efficiency === true) {
        $('#lab11_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab11_NVG").hover(()=>{
        if (this._labListed11_NVG.Tool_Category === "Qualifications") {
            $('#lab11_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed11_NVG.Tool_Category === "Field Issues") {
            $('#lab11_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed11_NVG.Tool_Category === "Process") {
            $('#lab11_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed11_NVG.Tool_efficiency === false) {
            $('#lab11_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed11_NVG.Tool_efficiency === true) {
            $('#lab11_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/127/').subscribe(data =>{
      this._labListed12_NVG= data as [any];
      if (this._labListed12_NVG.Tool_efficiency === false) {
        $('#lab12_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed12_NVG.Tool_efficiency === true) {
        $('#lab12_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab12_NVG").hover(()=>{
        if (this._labListed12_NVG.Tool_Category === "Qualifications") {
            $('#lab12_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed12_NVG.Tool_Category === "Field Issues") {
            $('#lab12_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed12_NVG.Tool_Category === "Process") {
            $('#lab12_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed12_NVG.Tool_efficiency === false) {
            $('#lab12_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed12_NVG.Tool_efficiency === true) {
            $('#lab12_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    
    this.http.get(this.apiRoot+'/api/tool_category_data/121/').subscribe(data =>{
      this._labListed13_NVG = data as [any];
      if (this._labListed13_NVG.Tool_efficiency === false) {
        $('#lab13_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed13_NVG.Tool_efficiency === true) {
        $('#lab13_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab13_NVG").hover(()=>{
        if (this._labListed13_NVG.Tool_Category === "Qualifications") {
            $('#lab13_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed13_NVG.Tool_Category === "Field Issues") {
            $('#lab13_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed13_NVG.Tool_Category === "Process") {
            $('#lab13_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed13_NVG.Tool_efficiency === false) {
            $('#lab13_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed13_NVG.Tool_efficiency === true) {
            $('#lab13_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/153/').subscribe(data =>{
      this._labListed14_NVG = data as [any];
      if (this._labListed14_NVG.Tool_efficiency === false) {
        $('#lab14_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed14_NVG.Tool_efficiency === true) {
        $('#lab14_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab14_NVG").hover(()=>{
        if (this._labListed14_NVG.Tool_Category === "Qualifications") {
            $('#lab14_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed14_NVG.Tool_Category === "Field Issues") {
            $('#lab14_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed14_NVG.Tool_Category === "Process") {
            $('#lab14_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed14_NVG.Tool_efficiency === false) {
            $('#lab14_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed14_NVG.Tool_efficiency === true) {
            $('#lab14_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/139/').subscribe(data =>{
      this._labListed15_NVG = data as [any];
      if (this._labListed15_NVG.Tool_efficiency === false) {
        $('#lab15_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed15_NVG.Tool_efficiency === true) {
        $('#lab15_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab15_NVG").hover(()=>{
        if (this._labListed15_NVG.Tool_Category === "Qualifications") {
            $('#lab15_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed15_NVG.Tool_Category === "Field Issues") {
            $('#lab15_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed15_NVG.Tool_Category === "Process") {
            $('#lab15_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed15_NVG.Tool_efficiency === false) {
            $('#lab15_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed15_NVG.Tool_efficiency === true) {
            $('#lab15_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/135/').subscribe(data =>{
      this._labListed16_NVG = data as [any];
      if (this._labListed16_NVG.Tool_efficiency === false) {
        $('#lab16_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed16_NVG.Tool_efficiency === true) {
        $('#lab16_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab16_NVG").hover(()=>{
        if (this._labListed16_NVG.Tool_Category === "Qualifications") {
            $('#lab16_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed16_NVG.Tool_Category === "Field Issues") {
            $('#lab16_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed16_NVG.Tool_Category === "Process") {
            $('#lab16_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed16_NVG.Tool_efficiency === false) {
            $('#lab16_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed16_NVG.Tool_efficiency === true) {
            $('#lab16_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/132/').subscribe(data =>{
      this._labListed17_NVG = data as [any];
      if (this._labListed17_NVG.Tool_efficiency === false) {
        $('#lab17_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed17_NVG.Tool_efficiency === true) {
        $('#lab17_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab17_NVG").hover(()=>{
        if (this._labListed17_NVG.Tool_Category === "Qualifications") {
            $('#lab17_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed17_NVG.Tool_Category === "Field Issues") {
            $('#lab17_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed17_NVG.Tool_Category === "Process") {
            $('#lab17_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed17_NVG.Tool_efficiency === false) {
            $('#lab17_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed17_NVG.Tool_efficiency === true) {
            $('#lab17_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    // this.http.get(this.apiRoot+'/api/tool_category_data/123/').subscribe(data =>{
    //   this._labListed18_INN = data as [any];
    //   if (this._labListed18_INN.Tool_efficiency === false) {
    //     $('#lab18_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
    //   }
    //   else if (this._labListed18_INN.Tool_efficiency === true) {
    //     $('#lab18_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
    //   }

    //   $("#lab18_INN").hover(()=>{
    //     if (this._labListed18_INN.Tool_Category === "Qualifications") {
    //         $('#lab18_INN').css("fill", "rgb(125, 109, 196)");
    //     }
    //     else if (this._labListed18_INN.Tool_Category === "Field Issues") {
    //         $('#lab18_INN').css("fill", "rgb(255, 193, 203)");

    //     }
    //     else if (this._labListed18_INN.Tool_Category === "Process") {
    //         $('#lab18_INN').css({fill: "#aee9ca"});
    //     }
    // },
    //  ()=> {
    //     if (this._labListed18_INN.Tool_efficiency === false) {
    //         $('#lab18_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
    //     }
    //     else if (this._labListed18_INN.Tool_efficiency === true) {
    //         $('#lab18_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
    //     }
    // });


    this.http.get(this.apiRoot+'/api/tool_category_data/123/').subscribe(data =>{
      this._labListed18_NVG = data as [any];
      if (this._labListed18_NVG.Tool_efficiency === false) {
        $('#lab18_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed18_NVG.Tool_efficiency === true) {
        $('#lab18_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab18_NVG").hover(()=>{
        if (this._labListed18_NVG.Tool_Category === "Qualifications") {
            $('#lab18_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed18_NVG.Tool_Category === "Field Issues") {
            $('#lab18_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed19_NVG.Tool_Category === "Process") {
            $('#lab18_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed18_NVG.Tool_efficiency === false) {
            $('#lab18_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed18_NVG.Tool_efficiency === true) {
            $('#lab18_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })
    this.http.get(this.apiRoot+'/api/tool_category_data/123/').subscribe(data =>{
      this._labListed19_NVG = data as [any];
      if (this._labListed19_NVG.Tool_efficiency === false) {
        $('#lab19_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed19_NVG.Tool_efficiency === true) {
        $('#lab19_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab19_NVG").hover(()=>{
        if (this._labListed19_NVG.Tool_Category === "Qualifications") {
            $('#lab19_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed19_NVG.Tool_Category === "Field Issues") {
            $('#lab19_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed19_NVG.Tool_Category === "Process") {
            $('#lab19_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed19_NVG.Tool_efficiency === false) {
            $('#lab19_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed19_NVG.Tool_efficiency === true) {
            $('#lab19_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.labData20_NVG = this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      console.log(data);
      this._labListed20_NVG = data as [any];
      if (this._labListed20_NVG.Tool_efficiency === false) {
        $('#lab20_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed20_NVG.Tool_efficiency === true) {
        $('#lab20_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab20_NVG").hover(()=>{
        if (this._labListed20_NVG.Tool_Category === "Qualifications") {
            $('#lab20_NVG').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed20_NVG.Tool_Category === "Field Issues") {
            $('#lab20_NVG').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed20_NVG.Tool_Category === "Process") {
            $('#lab20_NVG').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed20_NVG.Tool_efficiency === false) {
            $('#lab20_NVG').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed20_NVG.Tool_efficiency === true) {
            $('#lab20_NVG').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })


    




    this._cumulativeLab = '';
    this._data1.dashboardCumulative().subscribe(data=>{
        this._cumulativeLab = data;
    })

    this._quaterLab = '';
    this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
    })      
  }

  ngOnDestroy(){
      
  }

}