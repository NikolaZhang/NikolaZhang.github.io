<template>
  <div>
    <v-app id="inspire">
      <v-main>
        <div v-for="(card, index) in sortCards" :key="index">
          <v-card
            :loading="loading"
            shaped
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img height="250" :src="card.img"></v-img>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="card.score"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey--text ms-4">{{ card.score }}</div>
              </v-row>
              <div class="my-4 text-subtitle-1">{{ card.subtitle }}</div>
              <div>
                {{ card.description }}
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>categories</v-card-title>
            <v-card-text>
              <v-chip-group column>
                <v-chip v-for="item in card.tags" :key="item" color="#66BB6A">
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: "MiniCard",
  data() {
    return {
      loading: false,
      selection: 1,
      cards: require("../config/data/bangumi"),
    };
  },
  created() {
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  computed: {
    sortCards() {
      this.cards.sort((o1, o2) => {
        if (o1.level && o2.level) {
          return o1.level - o2.level;
        } else if (o1.level) {
          return 1;
        } else if (o2.level) {
          return -1;
        } else {
          return 0;
        }
      });
      // 用于解决flex换行对齐问题
      return this.cards;
    },
  },
};
</script>