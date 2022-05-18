import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { b } from '@angular/core/src/render3';
// import * as $ from ‘jquery’;
declare var jquery:any;
declare var $ :any;
 

@Component({
  selector: 'app-bayhome',
  templateUrl: './bayhome.component.html',
  styleUrls: ['./bayhome.component.css']
})
export class BayhomeComponent implements OnInit {
  _cumulativeLab : any;
  _quaterLab : any;
  clock : any;
  [x: string]: any;
  constructor(private _data1:DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    setInterval(()=>{
      this.clock = Date.now();
    },1000);

    
    this.toolData = this._data1.getTools().subscribe(data =>{
      this._toolsListed = data as [any];
      
        this.bay1_NVG =  this._toolsListed.filter(data=>{
        return data.bay_number=='1_NVG' && data.is_active == true
        });
        this.bay1_NVG.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay1_NVG').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay1_NVG').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay1_NVG').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay1_NVG').css({fill: "#9ac3f5"});
        }
        })

         this.bay2_NVG =  this._toolsListed.filter(data=>{
         return data.bay_number=='2_NVG' && data.is_active == true
         });
         this.bay2_NVG.forEach(function (value) {
         if(value.status === 'IN'){
          $('#bay2_NVG').css({fill: "#ffff80"});
         }
         else if (value.status === 'ID') {
          $('#bay2_NVG').css({fill: "#ff7f7f"});
         }
         else if (value.status === 'PR') {
          $('#bay2_NVG').css({fill: "#c2de80"});
         }
         else if (value.status === 'MA') {
          $('#bay2_NVG').css({fill: "#9ac3f5"});
         }
         })

          this.bay3_NVG =  this._toolsListed.filter(data=>{
          return data.bay_number=='3_NVG' && data.is_active == true
          });
          this.bay3_NVG.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay3_NVG').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay3_NVG').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay3_NVG').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay3_NVG').css({fill: "#9ac3f5"});
          }
          })
      
        this.bay4_NVG =  this._toolsListed.filter(data=>{
        return data.bay_number=='4_NVG' && data.is_active == true
        });
  
        this.bay4_NVG.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay4_NVG').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay4_NVG').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay4_NVG').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay4_NVG').css({fill: "#9ac3f5"});
        }
        })
    
    this.bay5_NVG =  this._toolsListed.filter(data=>{
      return data.bay_number=='5_NVG' && data.is_active == true
    });

      this.bay5_NVG.forEach(function (value) {
      if(value.status === 'IN'){
        $('#bay5_NVG').css({fill: "#ffff80"});
      }
      else if (value.status === 'ID') {
        $('#bay5_NVG').css({fill: "#ff7f7f"});
      }
      else if (value.status === 'PR') {
        $('#bay5_NVG').css({fill: "#c2de80"});
      }
      else if (value.status === 'MA') {
        $('#bay5_NVG').css({fill: "#9ac3f5"});
      }
      })

        

      this.bay6_NVG = this._toolsListed.filter(data=>{
        return data.bay_number=='6_NVG' && data.is_active == true
      });
        this.bay6_NVG.forEach(function (value) {
          
        if(value.status === 'IN'){
          $('#bay6_NVG').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay6_NVG').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay6_NVG').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay6_NVG').css({fill: "#9ac3f5"});
        }
        })

        this.bay7_NVG =  this._toolsListed.filter(data=>{
          return data.bay_number=='7_NVG' && data.is_active == true
        });
          this.bay7_NVG.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay7_NVG').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay7_NVG').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay7_NVG').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay7_NVG').css({fill: "#9ac3f5"});
          }
          })

          this.bay8_NVG =  this._toolsListed.filter(data=>{
            return data.bay_number=='8_NVG' && data.is_active == true
          });
            this.bay8_NVG.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay8_NVG').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay8_NVG').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay8_NVG').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay8_NVG').css({fill: "#9ac3f5"});
            }
            })

          this.bay9_NVG =  this._toolsListed.filter(data=>{
            return data.bay_number=='9_NVG' && data.is_active == true
          });
            this.bay9_NVG.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay9_NVG').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay9_NVG').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay9_NVG').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay9_NVG').css({fill: "#9ac3f5"});
            }
            })

          this.bay10_NVG =  this._toolsListed.filter(data=>{
            return data.bay_number=='10_NVG' && data.is_active == true
          });
            this.bay10_NVG.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay10_NVG').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay10_NVG').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay10_NVG').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay10_NVG').css({fill: "#9ac3f5"});
            }
            })

                  
          this.bay11_NVG =  this._toolsListed.filter(data=>{
            return data.bay_number=='11_NVG' && data.is_active == true
          });
            this.bay11_NVG.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay11_NVG').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay11_NVG').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay11_NVG').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay11_NVG').css({fill: "#9ac3f5"});
            }
            })

            this.bay12_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='12_NVG' && data.is_active == true
            });
              this.bay12_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay12_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay12_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay12_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay12_NVG').css({fill: "#9ac3f5"});
              }
              })
              
            this.bay13_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='13_NVG' && data.is_active == true
            });
              this.bay13_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13_NVG').css({fill: "#9ac3f5"});
              }
              })

            this.bay14_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='14_NVG' && data.is_active == true
            });
              this.bay14_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay14_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay14_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay14_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay14_NVG').css({fill: "#9ac3f5"});
              }
              })

            this.bay15_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='15_NVG' && data.is_active == true
            });
              this.bay15_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay15_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay15_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay15_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay15_NVG').css({fill: "#9ac3f5"});
              }
              })


            this.bay16_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='16_NVG' && data.is_active == true
            });
              this.bay16_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay16_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay16_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay16_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay16_NVG').css({fill: "#9ac3f5"});
              }
              })
            
            this.bay17_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='17_NVG' && data.is_active == true
            });
              this.bay17_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay17_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay17_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay17_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay17_NVG').css({fill: "#9ac3f5"});
              }
              })  

            this.bay18_NVG =  this._toolsListed.filter(data=>{
              return data.bay_number=='18_NVG' && data.is_active == true
              });
              this.bay18_NVG.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay18_NVG').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay18_NVG').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay18_NVG').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay18_NVG').css({fill: "#9ac3f5"});
              }
              })

            this.bay19_NVG =  this._toolsListed.filter(data=>{
                return data.bay_number=='19_NVG' && data.is_active == true
              });
                this.bay19_NVG.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay19_NVG').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay19_NVG').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay19_NVG').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay19_NVG').css({fill: "#9ac3f5"});
                }
                })

              this.bay20_NVG =  this._toolsListed.filter(data=>{
                return data.bay_number=='20_NVG' && data.is_active == true
              });
                this.bay20_NVG.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay20_NVG').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay20_NVG').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay20_NVG').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay20_NVG').css({fill: "#9ac3f5"});
                }
                })

                
                    // this.bay4_NVG =  this._toolsListed.filter(data=>{
                    //   return data.bay_number=='4_NVG' && data.is_active == true
                    //    });
                    //   this.bay4_NVG.forEach(function (value) {
                    //   if(value.status === 'IN'){
                    //     $('#bay4_NVG').css({fill: "#ffff80"});
                    //   }
                    //   else if (value.status === 'ID') {
                    //     $('#bay4_NVG').css({fill: "#ff7f7f"});
                    //   }
                    //   else if (value.status === 'PR') {
                    //     $('#bay4_NVG').css({fill: "#c2de80"});
                    //   }
                    //   else if (value.status === 'MA') {
                    //     $('#bay4_NVG').css({fill: "#9ac3f5"});
                    //   }
                    //   })
                 })


      this._cumulativeLab = '';
      this._data1.dashboardCumulative().subscribe(data =>{
        this._cumulativeLab = data;
      })    

     
      this._quaterLab = '';
      this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
      })
  }

  ngOnDestroy(){
    this.toolData.unsubscribe();
    // this._cumulativeUtilization.unsubscribe();
    // this._quaterUtilization.unsubscribe();
  }

  setId(id){
    this.router.navigate(['dashboard/toolinfo'+'/'+id]);
  }
}