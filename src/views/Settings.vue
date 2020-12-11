<template>
  <div class="settings">
    <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
      <template v-slot:cell(preview)="data">
        <!-- controls可以直接寫 -->
        <audio controls="controls" :src="'./alarms/'+data.item.file"></audio>
        <!-- play 發生錯誤 uncaught (in promise) domexception: failed to load because no supported source was found. -->
        <!-- <button @click="Play(data.item.file)"><font-awesome-icon :icon="['fas', 'play']" ></font-awesome-icon></button> -->
      </template>
      <template v-slot:cell(select)="data">
        <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas', 'check']"></font-awesome-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      items: [
        {
          name: '鬧鈴',
          file: 'alarm1.mp3'
        },
        {
          name: 'yay',
          file: 'yay.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    },
    Play () {
      const pla = new Audio()
      pla.src = './alarms/data.item.file'
      pla.play()
    }
  }
}
</script>
