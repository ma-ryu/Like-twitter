<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title>Notifications</v-card-title>
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" flat>
              <v-card-content>
                <v-row justify="center">
                  <v-col cols="md-1" class="pt-10">
                    <v-row justify="center">
                      <v-icon>mdi-account</v-icon>
                    </v-row>
                  </v-col>
                  <v-col cols="md-10">
                    <v-card-subtitle>maryu@warble</v-card-subtitle>
                    <v-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cum ducimus accusantium libero minima porro quia aliquam
                      maxime? Dignissimos laudantium ipsa porro cumque culpa
                      sapiente libero dolore provident aut perspiciatis animi
                      vitae sunt distinctio, quo vel laborum minus aspernatur
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-repeat</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-comment-outline</v-icon></v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
                <v-divider />
              </v-card-content>
              <v-card-content>
                <v-row justify="center">
                  <v-col cols="md-1" class="pt-10">
                    <v-row justify="center">
                      <v-icon>mdi-account</v-icon>
                    </v-row>
                  </v-col>
                  <v-col cols="md-10">
                    <v-card-subtitle>maryu@warble</v-card-subtitle>
                    <v-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cum ducimus accusantium libero minima porro quia aliquam
                      maxime? Dignissimos laudantium ipsa porro cumque culpa
                      sapiente libero dolore provident aut perspiciatis animi
                      vitae sunt distinctio, quo vel laborum minus aspernatur
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-repeat</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-comment-outline</v-icon></v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
                <v-divider />
              </v-card-content>
              <v-card-content>
                <v-row justify="center">
                  <v-col cols="md-1" class="pt-10">
                    <v-row justify="center">
                      <v-icon>mdi-account</v-icon>
                    </v-row>
                  </v-col>
                  <v-col cols="md-10">
                    <v-card-subtitle>maryu@warble</v-card-subtitle>
                    <v-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cum ducimus accusantium libero minima porro quia aliquam
                      maxime? Dignissimos laudantium ipsa porro cumque culpa
                      sapiente libero dolore provident aut perspiciatis animi
                      vitae sunt distinctio, quo vel laborum minus aspernatur
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-repeat</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-comment-outline</v-icon></v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
                <v-divider />
              </v-card-content>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['All', 'Mentions'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
