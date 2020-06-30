<template>
  <v-app dark>
    <v-content>
      <v-row justify="center">
        <v-col cols="md-2">
          <div class="sidebar-user ma-5">
            <v-list rounded class="mb-3">
              <v-subheader>REPORTS</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-btn rounded width="100%" class="pa-5 mb-5">Tweet</v-btn>
            <v-menu top :offset-y="offset">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  bottom
                  rounded
                  width="100%"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account</v-icon>
                  maryu@warble
                </v-btn>
              </template>

              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-icon>mdi-account</v-icon>
                    maryu@warble
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    Add existing acount
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    Log out @warble
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
        <v-col cols="md-5">
          <v-container>
            <nuxt />
          </v-container>
        </v-col>
        <v-col cols="md-3">
          <div class="sidebar ma-5">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              placeholder="search twitter..."
              filled
              rounded
              dense
            ></v-text-field>
            <v-card class="mx-auto mb-3">
              <v-list rounded>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-card class="mx-auto">
              <v-list rounded>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-content>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      offset: true,
      items: [
        { text: 'HOME', icon: 'mdi-home' },
        { text: 'Profile', icon: 'mdi-account' },
        { text: 'Notifications', icon: 'mdi-bell' },
        { text: 'Bookmarks', icon: 'mdi-bookmark' },
        { text: 'Messages', icon: 'mdi-email' },
      ],
    }
  },
}
</script>

<style></style>
