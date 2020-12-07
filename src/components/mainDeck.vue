<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="8">
        <v-container>
          <v-row class="text-center">
            <v-col cols="12" class='text-h6'>
              {{ instruction }}
            </v-col>
            <v-col cols="12">
              <v-window v-model='controls' reverse>
                <v-window-item>
                  <v-btn :color="btnColors[0]" width='150px' class='mx-3' :disabled='globalState != "start" && !doors[0].selected' @click='pickADoor(0)'>Door 1</v-btn>
                  <v-btn :color="btnColors[1]" width='150px' class='mx-3' :disabled='globalState != "start" && !doors[1].selected' @click='pickADoor(1)'>Door 2</v-btn>
                  <v-btn :color="btnColors[2]" width='150px' class='mx-3' :disabled='globalState != "start" && !doors[2].selected' @click='pickADoor(2)'>Door 3</v-btn>
                </v-window-item>
                <v-window-item>
                  <v-btn width='200px' class='mx-3' :disabled='globalState != "confirm"' @click='confirmDoor(true)'>Keep</v-btn>
                  <v-btn width='200px' dark class='mx-3' :disabled='globalState != "confirm"' @click='confirmDoor(false)'>Change</v-btn>
                </v-window-item>
              </v-window>
            </v-col>
            <v-col cols="4" v-for="(door, index) in doors" :key="index">
              <v-img src="../assets/door.png" v-if='!door.open && !door.selected'></v-img>
              <v-img src="../assets/door-selected.png" v-if='!door.open && door.selected'></v-img>
              <v-img src="../assets/door-car.png" v-if='door.open && door.win && !door.selected'></v-img>
              <v-img src="../assets/door-car-selected.png" v-if='door.open && door.win && door.selected'></v-img>
              <v-img src="../assets/door-goat.png" v-if='door.open && !door.win && !door.selected'></v-img>
              <v-img src="../assets/door-goat-selected.png" v-if='door.open && !door.win && door.selected'></v-img>
            </v-col>
            <!-- <v-col cols="4" v-for="(name, index) in doorNames" :key="index">
              <v-img :src="name"></v-img>
            </v-col> -->
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container>
          <v-row>
            <v-col cols="12" class='text-h6'>
              Stats
            </v-col>
            <v-col cols="6" class='pa-0' style='display:flex;align-items:center;justify-content:center'>
              <v-card width='150px' height='50px' color='white' style='display:flex;align-items:center;justify-content:center'>
                Kept
              </v-card>
            </v-col>
            <v-col cols="6" class='pa-0' style='display:flex;align-items:center;justify-content:center'>
              <v-card width='150px' height='50px' color='black' dark style='display:flex;align-items:center;justify-content:center'>
                Changed
              </v-card>
            </v-col>
            <v-col cols="6" class='text-h6'>
              {{ keepRatio }}
            </v-col>
            <v-col cols="6" class='text-h6'>
              {{ changeRatio }}
            </v-col>
            <v-col cols="6" style='display:flex;justify-content:center;'>
              <div class='historyPan'>
                <div v-for='i in history.keepWin' :key='`keepWin-${i}`' style='width:20px;height:20px;background:rgb(0,255,0);margin:1px 1px 0px 1px'></div>
                <div v-for='i in history.keepLose' :key='`keeplose-${i}`' style='width:20px;height:20px;background:rgb(255,0,0);margin:1px 1px 0px 1px'></div>
              </div>
            </v-col>
            <v-col cols="6" style='display:flex;justify-content:center;'>
              <div class='historyPan'>
                <div v-for='i in history.changeWin' :key='`changeWin-${i}`' style='width:20px;height:20px;background:rgb(0,255,0);margin:1px 1px 0px 1px'></div>
                <div v-for='i in history.changeLose' :key='`changelose-${i}`' style='width:20px;height:20px;background:rgb(255,0,0);margin:1px 1px 0px 1px'></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-dialog v-model='winDialog' overlay-color="white" content-class="elevation-0">
        <v-img src="../assets/youwin.png" width='350px' style='margin: auto'></v-img>
        <v-img src="../assets/door-car.png" width='250px' style='margin: auto'></v-img>
      </v-dialog>
      <v-dialog v-model='loseDialog' content-class="elevation-0">
        <v-img src="../assets/youlose.png" width='350px' style='margin: auto'></v-img>
        <v-img src="../assets/door-goat.png" width='250px' style='margin: auto'></v-img>
      </v-dialog>
      <v-col cols="4">
        <v-btn rounded outlined block class='mx-4' @click="toggleDoors">
            {{ openBtnDisplay }}
          </v-btn>
      </v-col>
      <v-col cols="4" class='text-center'>
      <v-dialog v-model="autoDialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn rounded outlined v-bind="attrs" v-on="on" block class='mx-4'>
            Autoplay
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
            Lauch Autoplay
          </v-card-title>
          <v-card-text>
            Play the game automatically multiple times
            <v-text-field class='mt-3' label="Repetitions" v-model="autoPlayTimes" type='number' outlined min='1' max='400'></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" width="150px" class='mx-1' dark @click="autoDialog = false">
              Cancel
            </v-btn>
            <v-btn color="success" width="150px" class='mx-1' dark @click="launchAutoPlay">
              GO !
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-col>
      <v-col cols="4">
        <v-btn rounded outlined block class='mx-4' @click="resetStats">
            Reset Stats
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'mainDeck',

    data: () => ({
      globalState: 'start',
      controls: 0,
      instruction: 'Pick a door',
      doors: [],
      doorNames: [],
      btnColors: ['primary', 'primary', 'primary'],
      history: {changeWin: 0, changeLose: 0, keepWin: 0, keepLose: 0},
      winDialog: false,
      loseDialog: false,
      autoDialog: false,
      forceUpdate: 0,
      onAutoPlay: false,
      autoPlayTimes: 100,
      openBtnDisplay: 'open doors'
    }),
    computed:{
      changeRatio(){
        this.forceUpdate;
        if(this.history.changeWin+this.history.changeLose == 0) return '--'
        let ratio = Math.floor(100*this.history.changeWin/(this.history.changeWin+this.history.changeLose), 2);
        return `${ratio}%`
      },
      keepRatio(){
        this.forceUpdate;
        if(this.history.keepWin+this.history.keepLose == 0) return '--'
        let ratio = Math.floor(100*this.history.keepWin/(this.history.keepWin+this.history.keepLose));
        return `${ratio}%`
      }
    },
    mounted(){
      this.reset()
    },
    // watch:{
    //   doors: {
    //     immediate: true,
    //     deep: true,
    //     handler(val) {
    //       console.log(val);
    //       this.doorNames = [];
    //       val.forEach(door => {
    //         let name = 'door';
    //         if(door.open){
    //           if(door.win){
    //             name += '-car';
    //           } else {
    //             name += '-goat';
    //           }
    //         }
    //         if(door.selected){
    //           name += '-selected';
    //         }
    //         this.doorNames.push(`../assets/${name}.png`);
    //       });
    //       console.log(this.doorNames);
    //     }
    //   }
    // },
    methods: {
      reset(){
        this.globalState = 'start';
        this.controls = 0;
        this.btnColors = ['primary', 'primary', 'primary'];
        this.pickedDoor = 0;
        this.instruction = 'Pick a door';
        let winningDoor = Math.floor(Math.random()*3);
        this.doors = [];
        for(let i=0; i<3; i++){
          if(i == winningDoor){
            this.doors.push({open: false, win: true, selected: false});
          } else {
            this.doors.push({open: false, win: false, selected: false});
          }
        }
      },
      pickADoor(nb){
        if(this.globalState == 'start'){
          this.globalState = '';
          this.pickedDoor = nb;
          this.doors[nb].selected = true;
          this.btnColors[nb] = 'success'
          setTimeout(() => {
            let revealIndex = Math.floor(Math.random()*3);
            while(this.doors[revealIndex].win || this.doors[revealIndex].selected){
              revealIndex = (revealIndex + 1)%3
            }
            this.doors[revealIndex].open = true;
          }, 500);
          let waitingTime = this.onAutoPlay ? 0 : 500
          setTimeout(()=> {
            this.globalState = 'confirm';
            this.controls = 1;
            this.instruction = 'Keep the same door ?';
          }, waitingTime);
        }
      },
      confirmDoor(val){
        if(this.globalState == 'confirm'){
          this.globalState = '';
          let win = false;
          if(!val){
           this.doors.forEach(door => {
             if(!door.selected && !door.open){
               door.open = true;
               if(door.win){
                 win = true;
               }
             }
           });
          } else {
            this.doors.forEach(door => {
              if(door.selected){
                door.open = true;
                if(door.win){
                  win = true;
                }
              }
            });
          }
          let divider = this.onAutoPlay ? 50 : 1
          if(win){
            if(!this.onAutoPlay){
              setTimeout(() => this.winDialog = true, 500);
              setTimeout(() => this.winDialog = false, 1500);
            }
            if(val){
              this.history.keepWin++;
            } else {
              this.history.changeWin++;
            }
          } else {
            if(!this.onAutoPlay){
              setTimeout(() => this.loseDialog = true, 500);
              setTimeout(() => this.loseDialog = false, 1500);
            }
            if(val){
              this.history.keepLose++;
            } else {
              this.history.changeLose++;
            }
          }
          this.forceUpdate++;
          setTimeout(this.reset, 1500/divider);
        }
      },
      autoPlay(times){
        if(times > 0){
          this.pickADoor(Math.floor(Math.random()*3));
          this.confirmDoor(Math.floor(Math.random()*2) == 0);
          setTimeout(() => this.autoPlay(--times), 100);
        } else {
          this.onAutoPlay = false;
          setTimeout(() => this.reset(), 500);
        }
      },
      launchAutoPlay(){
        this.autoDialog = false;
        this.reset();
        this.history = {changeWin: 0, changeLose: 0, keepWin: 0, keepLose: 0};
        this.onAutoPlay = true;
        this.autoPlay(Math.min(this.autoPlayTimes, 400))
      },
      resetStats(){
        this.history = {changeWin: 0, changeLose: 0, keepWin: 0, keepLose: 0};
      },
      toggleDoors(){
        if(this.openBtnDisplay == 'open doors'){
          this.doors.forEach(door => door.open = true);
          this.openBtnDisplay = 'reset doors';
        } else {
          this.reset();
          this.openBtnDisplay = 'open doors';
        }
      }
    }
  }
</script>

<style scoped>
  .historyPan{
    display:flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    height: 250px;
    margin: 0px 2px
  }
</style>