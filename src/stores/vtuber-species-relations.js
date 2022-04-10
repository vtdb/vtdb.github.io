import { defineStore } from 'pinia'
import { useVtubersStore } from '@/stores/vtubers'
import { useSpeciesStore } from '@/stores/species'
import axios from 'axios';

export const useVtuberSpeciesRelationsStore = defineStore('vtuber-species-relations', {
    state: () => ({
        list: [],
        listOnceLoaded: false,
        listLoading: false,
        listError: null,
    }),
    getters: {
        getByVtuber: (state) => (vtuber_id) => state.list.filter(r => r.vtuber_id == vtuber_id),
        getBySpecies: (state) => (species_id) => state.list.filter(r => r.species_id == species_id),
        getSpeciesByVtuber() {
            const speciesStore = useSpeciesStore();
            return (vtuber_id) => speciesStore.getByIds(this.getByVtuber(vtuber_id).map(r => r.species_id));
        },
        getVtubersBySpecies() {
            const vtubersStore = useVtubersStore();
            return (species_id) => vtubersStore.getByIds(this.getBySpecies(species_id).map(r => r.vtuber_id));
        },
    },
    actions: {
        requestList() {
            this.listLoading = true;
            axios.get('vtuber-species-relations.json').then((response) => {
                this.list = response.data;
                this.listOnceLoaded = true;
                this.listLoading = false;
                this.listError = null;
            }).catch((err) => {
                this.listError = err;
                this.listLoading = false;
            });
        },
    }
})