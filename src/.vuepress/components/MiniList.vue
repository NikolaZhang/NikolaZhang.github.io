<template>
  <div style="margin: 0px 100px">
    <v-app id="inspire">
      <v-main>
        <v-list three-line>
          <v-chip-group
            v-model="tagsSelected"
            active-class="primary--text"
            column
            multiple
          >
            <v-chip
              filter
              outlined
              v-for="(tag, index) in tagList"
              :key="tag + '_' + index"
              :value="tag"
              @click="selectList()"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
          <v-list-item-group multiple>
            <template v-for="(item, index) in selectList()">
              <v-list-item :key="item.title">
                <template>
                  <v-container>
                    <v-row align="start" class="d-flex flex-wrap">
                      <v-col>
                        <v-list-item-content>
                          <v-img
                            contain
                            max-height="100%"
                            lazy-src="https://picsum.photos/id/11/500/300"
                            :src="item.img"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  indeterminate
                                  color="grey lighten-5"
                                ></v-progress-circular>
                              </v-row>
                            </template>
                          </v-img>
                        </v-list-item-content>
                      </v-col>
                      <v-col cols="6">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.title"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.subtitle"
                          ></v-list-item-subtitle>
                          <v-chip-group column>
                            <v-chip
                              v-for="tag in item.tags"
                              :key="tag"
                              color="#66BB6A"
                            >
                              {{ tag }}
                            </v-chip>
                          </v-chip-group>
                        </v-list-item-content>
                        <v-list-item-content>
                          <v-row align="center">
                            <v-col cols="1">
                              <a v-if="item.link" :href="item.link" target="_blank">
                                <i class="fa fa-link" aria-hidden="true"></i>
                              </a>
                            </v-col>
                            <v-col cols="1">
                              <a v-if="item.home" :href="item.home" target="_blank">
                                <i class="fa fa-home" aria-hidden="true"></i>
                              </a>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-col>
                      <v-col cols="2">
                        <v-list-item-action>
                          <v-icon v-if="!item.like" color="grey lighten-1">
                            mdi-star-outline
                          </v-icon>
                          <v-icon v-else color="yellow darken-3">
                            mdi-star
                          </v-icon>
                          <v-list-item-action-text
                            v-text="item.time"
                          ></v-list-item-action-text>
                        </v-list-item-action>
                      </v-col>
                    </v-row>
                    <v-row v-if="item.more">
                      <v-list-item-content>
                        <v-expansion-panels focusable>
                          <v-expansion-panel
                            v-for="(val, i) in item.more"
                            :key="val.title + '_' + i"
                          >
                            <v-expansion-panel-header>
                              <v-row
                                align="center"
                                justify-content="start"
                              >
                                <v-col cols="1" justify="space-around">
                                  <v-avatar color="orange" size="36px">
                                    <span class="white--text text-h5">{{i+1}}</span>
                                  </v-avatar>
                                </v-col>
                                <v-col>
                                  {{ val.title }}
                                </v-col>
                              </v-row>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <v-chip-group column>
                                <v-chip
                                  v-for="inner_tag in val.tags"
                                  :key="'inner_' + inner_tag"
                                  color="#66BB6A"
                                >
                                  {{ inner_tag }}
                                </v-chip>
                              </v-chip-group>
                              <a v-if="val.link" :href="val.link" target="_blank">
                                <i class="fa fa-link" aria-hidden="true">跳转</i>
                              </a>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-list-item-content>
                    </v-row>
                  </v-container>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "MiniList",
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data: () => ({
    tagsSelected: [],
    tagInfoMap: {},
    tagList: [],
  }),
  created() {
    this.analysisTags();
    this.tagList = this.getTags();
  },
  methods: {
    getTags() {
      let tags = [];
      for (let k in this.tagInfoMap) {
        tags.push(k);
      }
      return tags;
    },
    analysisTags() {
      // 提取所有项目中的标签信息
      this.tagInfoMap = {};
      this.items.forEach((item, indexItem) => {
        if (item.tags) {
          item.tags.forEach((tag, indexTag) => {
            if (this.tagInfoMap[tag]) {
              this.tagInfoMap[tag].push(item);
            } else {
              this.tagInfoMap[tag] = [item];
            }
          });
        }
        if (item.more) {
          item.more.forEach((moreInfo, indexTag) => {
            moreInfo.tags.forEach(moreTags => {
              if (this.tagInfoMap[moreTags]) {
                this.tagInfoMap[moreTags].push(item);
              } else {
                this.tagInfoMap[moreTags] = [item];
              }
            })

          });
        }
      });
    },
    selectList() {
      if (!this.tagsSelected || this.tagsSelected.length === 0) {
        return this.items;
      } else {
        let result = new Set();
        this.tagsSelected.forEach((tag) => {
          if (this.tagInfoMap[tag]) {
            this.tagInfoMap[tag].forEach((item) => {
              result.add(item);
            });
          }
        });
        return [...result];
      }
    },
  },
};
</script>