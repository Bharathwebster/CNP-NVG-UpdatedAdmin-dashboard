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
      
        this.bay1_NGF =  this._toolsListed.filter(data=>{
        return data.bay_number=='1_NGF' && data.is_active == true
        });
        this.bay1_NGF.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay1_NGF').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay1_NGF').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay1_NGF').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay1_NGF').css({fill: "#9ac3f5"});
        }
        })

        //  this.bay2_NGF =  this._toolsListed.filter(data=>{
        //  return data.bay_number=='2_NGF' && data.is_active == true
        //  });
        //  this.bay2_NGF.forEach(function (value) {
        //  if(value.status === 'IN'){
        //   $('#bay2_NGF').css({fill: "#ffff80"});
        //  }
        //  else if (value.status === 'ID') {
        //   $('#bay2_NGF').css({fill: "#ff7f7f"});
        //  }
        //  else if (value.status === 'PR') {
        //   $('#bay2_NGF').css({fill: "#c2de80"});
        //  }
        //  else if (value.status === 'MA') {
        //   $('#bay2_NGF').css({fill: "#9ac3f5"});
        //  }
        //  })
        this.bay2a_NGF =  this._toolsListed.filter(data=>{
         return data.bay_number=='2a_NGF' && data.is_active == true
         });
         this.bay2a_NGF.forEach(function (value) {
         if(value.status === 'IN'){
          $('#bay2a_NGF').css({fill: "#ffff80"});
         }
         else if (value.status === 'ID') {
          $('#bay2a_NGF').css({fill: "#ff7f7f"});
         }
         else if (value.status === 'PR') {
          $('#bay2a_NGF').css({fill: "#c2de80"});
         }
         else if (value.status === 'MA') {
          $('#bay2a_NGF').css({fill: "#9ac3f5"});
         }
         })

         this.bay2b_NGF =  this._toolsListed.filter(data=>{
         return data.bay_number=='2b_NGF' && data.is_active == true
         });
         this.bay2b_NGF.forEach(function (value) {
         if(value.status === 'IN'){
          $('#bay2b_NGF').css({fill: "#ffff80"});
         }
         else if (value.status === 'ID') {
          $('#bay2b_NGF').css({fill: "#ff7f7f"});
         }
         else if (value.status === 'PR') {
          $('#bay2b_NGF').css({fill: "#c2de80"});
         }
         else if (value.status === 'MA') {
          $('#bay2b_NGF').css({fill: "#9ac3f5"});
         }
         })

         this.bay2c_NGF =  this._toolsListed.filter(data=>{
         return data.bay_number=='2c_NGF' && data.is_active == true
         });
         this.bay2c_NGF.forEach(function (value) {
         if(value.status === 'IN'){
          $('#bay2c_NGF').css({fill: "#ffff80"});
         }
         else if (value.status === 'ID') {
          $('#bay2c_NGF').css({fill: "#ff7f7f"});
         }
         else if (value.status === 'PR') {
          $('#bay2c_NGF').css({fill: "#c2de80"});
         }
         else if (value.status === 'MA') {
          $('#bay2c_NGF').css({fill: "#9ac3f5"});
         }
         })

          this.bay3_NGF =  this._toolsListed.filter(data=>{
          return data.bay_number=='3_NGF' && data.is_active == true
          });
          this.bay3_NGF.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay3_NGF').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay3_NGF').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay3_NGF').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay3_NGF').css({fill: "#9ac3f5"});
          }
          })
      
        // this.bay4_NGF =  this._toolsListed.filter(data=>{
        // return data.bay_number=='4_NGF' && data.is_active == true
        // });
  
        // this.bay4_NGF.forEach(function (value) {
        // if(value.status === 'IN'){
        //   $('#bay4_NGF').css({fill: "#ffff80"});
        // }
        // else if (value.status === 'ID') {
        //   $('#bay4_NGF').css({fill: "#ff7f7f"});
        // }
        // else if (value.status === 'PR') {
        //   $('#bay4_NGF').css({fill: "#c2de80"});
        // }
        // else if (value.status === 'MA') {
        //   $('#bay4_NGF').css({fill: "#9ac3f5"});
        // }
        // })

        this.bay4a_NGF =  this._toolsListed.filter(data=>{
        return data.bay_number=='4a_NGF' && data.is_active == true
        });
  
        this.bay4a_NGF.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay4a_NGF').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay4a_NGF').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay4a_NGF').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay4a_NGF').css({fill: "#9ac3f5"});
        }
        })

        this.bay4b_NGF =  this._toolsListed.filter(data=>{
        return data.bay_number=='4b_NGF' && data.is_active == true
        });
  
        this.bay4b_NGF.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay4b_NGF').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay4b_NGF').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay4b_NGF').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay4b_NGF').css({fill: "#9ac3f5"});
        }
        })
    
    this.bay5_NGF =  this._toolsListed.filter(data=>{
      return data.bay_number=='5_NGF' && data.is_active == true
    });

      this.bay5_NGF.forEach(function (value) {
      if(value.status === 'IN'){
        $('#bay5_NGF').css({fill: "#ffff80"});
      }
      else if (value.status === 'ID') {
        $('#bay5_NGF').css({fill: "#ff7f7f"});
      }
      else if (value.status === 'PR') {
        $('#bay5_NGF').css({fill: "#c2de80"});
      }
      else if (value.status === 'MA') {
        $('#bay5_NGF').css({fill: "#9ac3f5"});
      }
      })

        

      // this.bay6_NGF = this._toolsListed.filter(data=>{
      //   return data.bay_number=='6_NGF' && data.is_active == true
      // });
      //   this.bay6_NGF.forEach(function (value) {
          
      //   if(value.status === 'IN'){
      //     $('#bay6_NGF').css({fill: "#ffff80"});
      //   }
      //   else if (value.status === 'ID') {
      //     $('#bay6_NGF').css({fill: "#ff7f7f"});
      //   }
      //   else if (value.status === 'PR') {
      //     $('#bay6_NGF').css({fill: "#c2de80"});
      //   }
      //   else if (value.status === 'MA') {
      //     $('#bay6_NGF').css({fill: "#9ac3f5"});
      //   }
      //   })

      this.bay6a_NGF = this._toolsListed.filter(data=>{
        return data.bay_number=='6a_NGF' && data.is_active == true
      });
        this.bay6a_NGF.forEach(function (value) {
          
        if(value.status === 'IN'){
          $('#bay6a_NGF').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay6a_NGF').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay6a_NGF').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay6a_NGF').css({fill: "#9ac3f5"});
        }
        })

        this.bay6b_NGF = this._toolsListed.filter(data=>{
        return data.bay_number=='6b_NGF' && data.is_active == true
      });
        this.bay6b_NGF.forEach(function (value) {
          
        if(value.status === 'IN'){
          $('#bay6b_NGF').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay6b_NGF').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay6b_NGF').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay6b_NGF').css({fill: "#9ac3f5"});
        }
        })

        this.bay7_NGF =  this._toolsListed.filter(data=>{
          return data.bay_number=='7_NGF' && data.is_active == true
        });
          this.bay7_NGF.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay7_NGF').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay7_NGF').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay7_NGF').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay7_NGF').css({fill: "#9ac3f5"});
          }
          })

          this.bay8_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='8_NGF' && data.is_active == true
          });
            this.bay8_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay8_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay8_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay8_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay8_NGF').css({fill: "#9ac3f5"});
            }
            })

          this.bay9_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='9_NGF' && data.is_active == true
          });
            this.bay9_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay9_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay9_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay9_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay9_NGF').css({fill: "#9ac3f5"});
            }
            })

          // this.bay10_NGF =  this._toolsListed.filter(data=>{
          //   return data.bay_number=='10_NGF' && data.is_active == true
          // });
          //   this.bay10_NGF.forEach(function (value) {
          //   if(value.status === 'IN'){
          //     $('#bay10_NGF').css({fill: "#ffff80"});
          //   }
          //   else if (value.status === 'ID') {
          //     $('#bay10_NGF').css({fill: "#ff7f7f"});
          //   }
          //   else if (value.status === 'PR') {
          //     $('#bay10_NGF').css({fill: "#c2de80"});
          //   }
          //   else if (value.status === 'MA') {
          //     $('#bay10_NGF').css({fill: "#9ac3f5"});
          //   }
          //   })

          this.bay10a_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='10a_NGF' && data.is_active == true
          });
            this.bay10a_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay10a_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay10a_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay10a_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay10a_NGF').css({fill: "#9ac3f5"});
            }
            })

            this.bay10b_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='10b_NGF' && data.is_active == true
          });
            this.bay10b_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay10b_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay10b_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay10b_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay10b_NGF').css({fill: "#9ac3f5"});
            }
            })

            this.bay10c_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='10c_NGF' && data.is_active == true
          });
            this.bay10c_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay10c_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay10c_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay10c_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay10c_NGF').css({fill: "#9ac3f5"});
            }
            })

                  
          this.bay11_NGF =  this._toolsListed.filter(data=>{
            return data.bay_number=='11_NGF' && data.is_active == true
          });
            this.bay11_NGF.forEach(function (value) {
            if(value.status === 'IN'){
              $('#bay11_NGF').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay11_NGF').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay11_NGF').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay11_NGF').css({fill: "#9ac3f5"});
            }
            })

            this.bay12_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='12_NGF' && data.is_active == true
            });
              this.bay12_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay12_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay12_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay12_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay12_NGF').css({fill: "#9ac3f5"});
              }
              })
              
            // this.bay13_NGF =  this._toolsListed.filter(data=>{
            //   return data.bay_number=='13_NGF' && data.is_active == true
            // });
            //   this.bay13_NGF.forEach(function (value) {
            //   if(value.status === 'IN'){
            //     $('#bay13_NGF').css({fill: "#ffff80"});
            //   }
            //   else if (value.status === 'ID') {
            //     $('#bay13_NGF').css({fill: "#ff7f7f"});
            //   }
            //   else if (value.status === 'PR') {
            //     $('#bay13_NGF').css({fill: "#c2de80"});
            //   }
            //   else if (value.status === 'MA') {
            //     $('#bay13_NGF').css({fill: "#9ac3f5"});
            //   }
            //   })

            this.bay13a_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='13a_NGF' && data.is_active == true
            });
              this.bay13a_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13a_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13a_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13a_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13a_NGF').css({fill: "#9ac3f5"});
              }
              })

             this.bay13b_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='13b_NGF' && data.is_active == true
            });
              this.bay13b_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13b_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13b_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13b_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13b_NGF').css({fill: "#9ac3f5"});
              }
              })
              
               this.bay13c_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='13c_NGF' && data.is_active == true
            });
              this.bay13c_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13c_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13c_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13c_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13c_NGF').css({fill: "#9ac3f5"});
              }
              })

             this.bay13d_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='13d_NGF' && data.is_active == true
            });
              this.bay13d_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13d_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13d_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13d_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13d_NGF').css({fill: "#9ac3f5"});
              }
              })

            this.bay14_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='14_NGF' && data.is_active == true
            });
              this.bay14_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay14_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay14_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay14_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay14_NGF').css({fill: "#9ac3f5"});
              }
              })

            this.bay15_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='15_NGF' && data.is_active == true
            });
              this.bay15_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay15_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay15_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay15_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay15_NGF').css({fill: "#9ac3f5"});
              }
              })


            this.bay16_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='16_NGF' && data.is_active == true
            });
              this.bay16_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay16_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay16_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay16_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay16_NGF').css({fill: "#9ac3f5"});
              }
              })
            
            this.bay17_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='17_NGF' && data.is_active == true
            });
              this.bay17_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay17_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay17_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay17_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay17_NGF').css({fill: "#9ac3f5"});
              }
              })  

            this.bay18a_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='18a_NGF' && data.is_active == true
              });
              this.bay18a_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay18a_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay18a_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay18a_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay18a_NGF').css({fill: "#9ac3f5"});
              }
              })

            this.bay18b_NGF =  this._toolsListed.filter(data=>{
              return data.bay_number=='18b_NGF' && data.is_active == true
              });
              this.bay18b_NGF.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay18b_NGF').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay18b_NGF').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay18b_NGF').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay18b_NGF').css({fill: "#9ac3f5"});
              }
              })

            this.bay19a_NGF =  this._toolsListed.filter(data=>{
                return data.bay_number=='19a_NGF' && data.is_active == true
              });
                this.bay19a_NGF.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay19a_NGF').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay19a_NGF').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay19a_NGF').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay19a_NGF').css({fill: "#9ac3f5"});
                }
                })

              this.bay19b_NGF =  this._toolsListed.filter(data=>{
                return data.bay_number=='19b_NGF' && data.is_active == true
              });
                this.bay19b_NGF.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay19b_NGF').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay19b_NGF').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay19b_NGF').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay19b_NGF').css({fill: "#9ac3f5"});
                }
                })

            // this.bay19_NGF =  this._toolsListed.filter(data=>{
            //     return data.bay_number=='19_NGF' && data.is_active == true
            //   });
            //     this.bay19_NGF.forEach(function (value) {
            //     if(value.status === 'IN'){
            //       $('#bay19_NGF').css({fill: "#ffff80"});
            //     }
            //     else if (value.status === 'ID') {
            //       $('#bay19_NGF').css({fill: "#ff7f7f"});
            //     }
            //     else if (value.status === 'PR') {
            //       $('#bay19_NGF').css({fill: "#c2de80"});
            //     }
            //     else if (value.status === 'MA') {
            //       $('#bay19_NGF').css({fill: "#9ac3f5"});
            //     }
            //     })

              this.bay20_NGF =  this._toolsListed.filter(data=>{
                return data.bay_number=='20_NGF' && data.is_active == true
              });
                this.bay20_NGF.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay20_NGF').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay20_NGF').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay20_NGF').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay20_NGF').css({fill: "#9ac3f5"});
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