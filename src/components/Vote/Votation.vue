<template>
  <v-card class="votation">
    <div class="votation__format">
      <v-autocomplete
        class="votation__format__select"
        v-model="selectFormat"
        :items="itemsFormat"
        item-text="name"
        item-value="value"
        label="Formato a usar"
        return-object
        clearable
        outlined
        hide-details
      ></v-autocomplete>
    </div>
    <div class="votation__mcs">
      <v-text-field
        class="votation__mcs__mc"
        label="Freestyler 1"
        outlined
        hide-details
      ></v-text-field>
      <v-text-field
        class="votation__mcs__mc"
        label="Freestyler 2"
        outlined
        hide-details
      ></v-text-field>
    </div>
    <draggable
      class="votation__rounds"
      v-model="actualFormat"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <div class="votation__rounds__round" v-for="element in actualFormat" :key="element.value">
        <v-card class="votation__rounds__round__card" color="grey darken-3" hover>
          <span class="votation__rounds__round__card__text">{{ element.name }}</span>
          <v-icon
            class="votation__rounds__round__card__icon"
            @click="removeThisRound(element)"
          >mdi-close</v-icon>
        </v-card>
      </div>

      <div slot="footer" class="votation__rounds__footer" role="group" key="footer">
        <v-autocomplete
          class="votation__rounds__footer__input"
          v-model="selectRound"
          :items="itemsRound"
          item-text="name"
          item-value="value"
          label="Agregar ronda"
          return-object
          clearable
          outlined
          hide-details
        ></v-autocomplete>
        <v-btn
          class="votation__rounds__footer__btn"
          color="primary darken-3"
          @click="addNewRoundtoActualFormat"
        >Agregar</v-btn>
        <v-btn
          class="votation__rounds__footer__btn"
          color="secondary darken-2"
          @click="saveThisFormat"
        >Guardar</v-btn>
      </div>
    </draggable>
  </v-card>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      selectFormat: { name: 'Personalizado', value: 'personalizado' },
      itemsFormat: [
        { name: 'FMS 2018', value: 'fms2018' },
        { name: 'FMS 2019/2020', value: 'fms2019' },
        { name: 'FMS 2020/2021', value: 'fms2020' },
        { name: 'Personalizado', value: 'personalizado' },
      ],
      selectRound: { name: 'EasyMode', value: 'easymode' },
      itemsRound: [
        { name: 'EasyMode', value: 'easymode' },
        { name: 'HardMode', value: 'hardmode' },
        { name: 'ExtremeMode', value: 'extrememode' },
        { name: 'Random Mode', value: 'random' },
        { name: 'Minutos', value: 'minutos' },
        { name: 'Deluxe', value: 'deluxe' },
      ],
      actualFormat: [
        { name: 'EasyMode', value: 'easymode' },
        { name: 'HardMode', value: 'hardmode' },
        { name: 'ExtremeMode', value: 'extrememode' },
        { name: 'Random Mode', value: 'random' },
        { name: 'Minutos', value: 'minutos' },
        { name: 'Deluxe', value: 'deluxe' },
      ],
    };
  },
  components: {
    draggable,
  },
  methods: {
    addNewRoundtoActualFormat() {
      if (this.selectRound) {
        this.actualFormat.push(this.selectRound);
      }
    },
    saveThisFormat() {
      if (this.actualFormat.length > 0) {
        console.log(this.actualFormat);
      }
    },
    removeThisRound(element) {
      const indexOfElement = this.actualFormat.findIndex((e) => e === element);
      this.actualFormat.splice(indexOfElement, 1);
      console.log(indexOfElement);
    },
  },
};
</script>

<style lang="scss" scoped>
.votation {
  grid-area: votation;
  width: 100%;
  height: 275px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  &__format {
    width: 100%;
    &__select {
      margin: 0 auto;
      width: 500px;
    }
  }
  &__mcs {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__rounds {
    width: calc(100% - 150px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &__round {
      padding: 0 10px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      &__card {
        padding: 10px 15px;
        margin: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: grab;
        &__icon {
          margin-left: 10px;
          padding: 2px;
          opacity: .7;
          cursor: pointer;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    &__footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      &__input {
        max-width: 500px;
      }
      &__btn {
        margin: 0 15px;
        padding: 22px 15px !important;
      }
    }
  }
}
</style>
