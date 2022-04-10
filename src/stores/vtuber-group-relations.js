import { defineStore } from 'pinia'
import { useVtubersStore } from '@/stores/vtubers'
import { useGroupsStore } from '@/stores/groups'
import axios from 'axios';

export const useVtuberGroupRelationsStore = defineStore('vtuber-group-relations', {
    state: () => ({
        list: [],
        listOnceLoaded: false,
        listLoading: false,
        listError: null,
    }),
    getters: {
        getByVtuber: (state) => (vtuber_id) => state.list.filter(r => r.vtuber_id == vtuber_id),
        getByGroup: (state) => (group_id) => state.list.filter(r => r.group_id == group_id),
        getGroupsByVtuber() {
            const groupsStore = useGroupsStore();
            return (vtuber_id) => groupsStore.getByIds(this.getByVtuber(vtuber_id).map(r => r.group_id));
        },
        getVtubersByGroup() {
            const vtubersStore = useVtubersStore();
            return (group_id) => vtubersStore.getByIds(this.getByGroup(group_id).map(r => r.vtuber_id));
        },
    },
    actions: {
        requestList() {
            this.listLoading = true;
            axios.get('vtuber-group-relations.json').then((response) => {
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