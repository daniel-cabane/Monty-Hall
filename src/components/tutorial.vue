<template>
    <v-dialog persistent v-model='showTutorial'>
        <v-card>
            <v-card-title class='display-2 font-weight-bold'>
                The Monty Hall Problem
            </v-card-title>
            <v-window v-model="onboarding">
                <v-window-item :key="`card-${0}`">
                    <v-card class='px-6 py-2' flat height="600">
                        <v-row class='fill-height'>
                            <v-col cols='8'>
                                <v-row>
                                    <v-col cols='12' class='headline'>
                                        You are presented with three doors
                                    </v-col>
                                    <v-col cols='4' v-for="i in 3" :key="`doors-1-${i}`">
                                        <v-img max-height='180px' contain src="../assets/door.png"/>
                                    </v-col>
                                    <v-col cols='12' class='headline'>
                                        Two of the doors hide a goat and one of the doors hides a car
                                    </v-col>
                                    <v-col cols='6' style='display:flex;flex-direction:column;align-items:center'>
                                        <v-img max-height='180px' contain src="../assets/door-goat.png"/>
                                        <span class='display-3 font-weight-bold'>
                                            ×2
                                        </span>
                                    </v-col>
                                    <v-col cols='6' style='display:flex;flex-direction:column;align-items:center'>
                                        <v-img max-height='180px' contain src="../assets/door-car.png"/>
                                        <span class='display-3 font-weight-bold'>
                                            ×1
                                        </span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="4" class='display-2 fill-height' style='display:flex;align-items:center'>
                                The Setup
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item :key="`card-${1}`">
                    <v-card class='px-6 py-2' flat height="600">
                        <v-row class='fill-height'>
                            <v-col cols='8'>
                                <v-row>
                                    <v-col cols='12' class='headline'>
                                        The goal is to pick the right door.
                                    </v-col>
                                    <v-col cols='6' style='display:flex;flex-direction:column;align-items:center'>
                                        <span class='headline'>
                                            If you pick the car, you win.
                                        </span>
                                        <v-img max-height='180px' contain src="../assets/door-car-selected.png"/>
                                        <v-img max-height='180px' contain src="../assets/youwin.png"/>
                                    </v-col>
                                    <v-col cols='6' style='display:flex;flex-direction:column;align-items:center'>
                                        <span class='headline'>
                                            If you pick the goat, you lose.
                                        </span>
                                        <v-img max-height='180px' contain src="../assets/door-goat-selected.png"/>
                                        <v-img max-height='180px' contain src="../assets/youlose.png"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="4" class='display-2 fill-height' style='display:flex;align-items:center'>
                                The Goal
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item :key="`card-${2}`">
                    <v-card class='px-6 py-2' flat height="600">
                        <v-row class='fill-height'>
                            <v-col cols='8'>
                                <v-row>
                                    <v-col cols='12' class='headline'>
                                        The game goes like this : You start by picking a door
                                    </v-col>
                                    <v-col cols='4'>
                                        <v-img max-height='180px' contain src="../assets/door-selected.png"/>
                                    </v-col>
                                    <v-col cols='4' v-for="i in 2" :key="`doors-3-${i}`">
                                        <v-img max-height='180px' contain src="../assets/door.png"/>
                                    </v-col>
                                    <v-col cols='12' class='headline'>
                                        Then the host opens another door, revealing a goat
                                    </v-col>
                                    <v-col cols='4'>
                                        <v-img max-height='180px' contain src="../assets/door-selected.png"/>
                                    </v-col>
                                    <v-col cols='4'>
                                        <v-img max-height='180px' contain src="../assets/door-goat.png"/>
                                    </v-col>
                                    <v-col cols='4'>
                                        <v-img max-height='180px' contain src="../assets/door.png"/>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="4" class='display-2 fill-height' style='display:flex;align-items:center'>
                                First Choice
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item :key="`card-${3}`">
                    <v-card class='px-6 py-2' flat height="600">
                        <v-row class='fill-height'>
                            <v-col cols='8'>
                                <v-row>
                                    <v-col cols='12' class='headline'>
                                        You now have a choice :
                                    </v-col>
                                    <v-col cols='12'>
                                        <v-row>
                                            <v-col cols='4' class='text-center'>
                                                <v-btn width='200px'>Keep</v-btn>
                                                <div>
                                                    your door
                                                </div>
                                            </v-col>
                                            <v-col cols='4' class='display-1 text-center'>
                                                OR
                                            </v-col>
                                            <v-col cols='4' class='text-center'>
                                                <v-btn width='200px' dark>Change</v-btn>
                                                <div>
                                                    your door
                                                </div>
                                            </v-col>
                                            <v-col cols='4'>
                                                <v-img max-height='180px' contain src="../assets/door-selected.png"/>
                                            </v-col>
                                            <v-col cols='4'>
                                                <v-img max-height='180px' contain src="../assets/door-goat.png"/>
                                            </v-col>
                                            <v-col cols='4'>
                                                <v-img max-height='180px' contain src="../assets/door.png"/>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols='12' class='headline mt-8 pb-0'>
                                        Which one of the following phrases is correct ?
                                    </v-col>
                                    <v-col cols='4' class='headline'>
                                        <span class='font-weight-bold'>1)</span> You have better chances of winning if you <v-chip label color='white' small class='elevation-5'>KEEP</v-chip> your door.
                                    </v-col>
                                    <v-col cols='4' class='headline'>
                                        <span class='font-weight-bold'>2)</span> You have better chances of winning if you <v-chip label color='black' text-color='white' small class='elevation-5'>CHANGE</v-chip> door.
                                    </v-col>
                                    <v-col cols='4' class='headline'>
                                        <span class='font-weight-bold'>3)</span> It does not matter, it's a 50-50 choice.
                                    </v-col>
                                    <v-col cols='12'>

                                    </v-col>

                                </v-row>
                            </v-col>
                            <v-col cols="4" class='display-2 fill-height' style='display:flex;align-items:center'>
                                The Dilemma
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
                <v-window-item :key="`card-${4}`">
                    <v-card class='px-6 py-2' flat height="600">
                        <v-row class='fill-height'>
                            <v-col cols="8" class='headline'>
                                <v-row>
                                    <v-col cols='8' class='text-justify'>
                                        <b>Monty Hall</b> (1921-2017) was a Canadian radio and television show host who moved to the United States in 1955 to pursue a career in broadcasting. After working as a radio newsreader and sportscaster, Hall returned to television in the U.S., this time in game shows. Starting in 1963, he was best known as the game show host and producer of <b>Let's Make a Deal</b>. As a celebrity, he had a conundrum with game theory and psychology aspects named after him, the Monty Hall problem. Behind the scenes, Hall also carried on an active life of philanthropy.
                                    </v-col>
                                    <v-col cols='4'>
                                        <v-img max-height='320px' contain src="../assets/MontyHall.png"/>
                                    </v-col>
                                </v-row>
                                This game was derived from <b>Monty Hall</b>'s show by an american statistician named <b>Steve Selvin</b> (who also gave it the name he now has).
                            </v-col>
                            <v-col cols="4" class='display-2 fill-height' style='display:flex;align-items:center'>
                                The History
                            </v-col>
                        </v-row>
                    </v-card>
                </v-window-item>
            </v-window>

            <v-card-actions style='display:block'>
                <div style='display:flex;justify-content:space-around'>
                    <v-btn text @click="prev">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-item-group v-model="onboarding" class="text-center" mandatory>
                        <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
                            <v-btn :input-value="active" icon @click="toggle">
                                <v-icon>mdi-record</v-icon>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn text @click="next">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
                <div style='display:flex'>
                    <v-spacer></v-spacer>
                    <v-btn color='primary' style='width:200px' @click='hideTutorial'>
                        Got it !
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'tutorial',

        props: {showTutorial: Boolean},
        data: () => ({
            length: 5,
            onboarding: 0,
        }),

        methods: {
            next () {
                this.onboarding = this.onboarding + 1 === this.length
                ? 0
                : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                ? this.length - 1
                : this.onboarding - 1
            },
            hideTutorial(){
                this.eventBus.$emit('toggleTutorial', false);
            }
        },
    }
</script>