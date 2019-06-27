<template>
  <div>
    <template v-for='items in menuItems'>                
      <v-list-group
        v-if='item.children'
        v-for='(item, index) in items'
        v-model='item.active'
        :key='item.title'
        :prepend-icon='item.icon'
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>    
        <v-list-tile
          v-for='child in item.children'
          :key='child.title'
          @click=''
          :to='child.link'
        >
          <v-list-tile-action>
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-tile-action>   
          <v-list-tile-content>
            <v-list-tile-title>{{ child.title }}</v-list-tile-title>
          </v-list-tile-content>       
        </v-list-tile>
      </v-list-group>
      <v-subheader
        v-else-if="item.header"
        :key="item.header"
      >
        {{ item.header }}
      </v-subheader>      
      <v-divider
        v-else-if="item.divider"
        :key="index"
      ></v-divider>      
      <v-list-tile v-else @click='' :to='item.link' :key='item.title'>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import menuAdmin from '@/configs/menu/admin';
import menuDefault from '@/configs/menu/default';

export default {
  computed: {
    ...mapGetters('Authentication', ['isAdmin']),
    menuItems() {
      let menu = [];
      menu.push(menuDefault);
      if (this.isAdmin) {
        menu.push(menuAdmin);
      }
      return menu;
    }
  },
};
</script>
