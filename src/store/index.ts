import { defineStore } from "pinia";

interface userProps {
  user: {
    name: string,
    email: string,
    images: string;
    followers: number,
    id: string,
    type: string,
  }
}

export const useStore = defineStore("store", {
  state: () => ({
    isLogged: false,
    user: {
      name: '',
      email: '',
      images: '',
      followers: 0,
      id: '',
      type: '',
    },
    myOwnPlaylists: [] as any,
    featuredPlaylists: [] as any,
    playlistsNames: [] as any,
  }),
  actions: {
    updateIsLogged(value: boolean) {
      this.isLogged = value;
    },

    updateUser(value: userProps) {
      this.user = value.user;
    }
  }
})