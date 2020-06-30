<template>
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
