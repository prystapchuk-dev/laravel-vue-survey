import {createStore} from  "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The Youtube",
    slug: "the-youtube",
    status: "draft",
    image: "https://www.fillmurray.com/640/360",
    description: "My Name is Serhii",
    created_at: "2022-04-05 16:00:00",
    updated_at: "2022-04-05 16:00:00",
    expire_date: "2022-04-05 16:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Georgia"},
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description: "Lorem ipsum",
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "JavaScript"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "PHP"},
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which PHP framework videos do you want to see to my chanel?",
        description: "Lorem ipsum",
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Yii"},
            {uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Symfony"},
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel Framework do you love most?",
        description: "Lorem ipsum",
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel 5"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "Laravel 6"},
            {uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Laravel 8"},
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What type of project do you want to see?",
        description: "Lorem ipsum",
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "REST API"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "E-commerce"},
            {uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Real Estate"},
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What type of project do you want to see?",
        description: "Lorem ipsum",
        data: {
          options: [
            {uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "REST API"},
            {uuid: "201c1ff5-23c9-42f9-bfb5-bbc850536440", text: "E-commerce"},
            {uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Real Estate"},
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favorite'",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What's do you'",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "active",
    image: "https://www.fillmurray.com/640/360",
    description: "Laravel is a web application framework",
    created_at: "2022-04-05 16:00:00",
    updated_at: "2022-04-05 16:00:00",
    expire_date: "2022-04-05 16:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://www.fillmurray.com/640/360",
    description: "Laravel is a web application framework",
    created_at: "2022-04-05 16:00:00",
    updated_at: "2022-04-05 16:00:00",
    expire_date: "2022-04-05 16:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "TailwindCss",
    slug: "tailwindcss",
    status: "active",
    image: "https://www.fillmurray.com/640/360",
    description: "Laravel is a web application framework",
    created_at: "2022-04-05 16:00:00",
    updated_at: "2022-04-05 16:00:00",
    expire_date: "2022-04-05 16:00:00",
    questions: [],
  }
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },

    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        })
    }
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, userData ) => {
      state.user.token = userData.token;
      state.user.datan = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    }
  },
  modules: {}
})
export default store;
