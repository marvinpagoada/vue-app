import api from "../../api";

export const changeQuery = ({commit}, query) => {
    commit('setQuery', query)
};

export const changeCardInResults = ({commit}, card) => {
    commit('updateCardInResults', card)
};


export const hints = ({commit, rootGetters}, params) => {
    return new Promise((resolve, reject) => {
        const team = rootGetters['teams/current'];
        if (team === null) {
            resolve([])
        }
        params['teamId'] = team.id;
        commit('hintsStatusRequest');
        api.cards.hints(params).then(res => {
            commit('hintsStatusSuccess', res);
            resolve(res.data)
        }).catch(err => {
            commit('hintsStatusFailure', err);
            reject(err)
        })
    })
};

export const cardsHints = ({commit, rootGetters}, params) => {
    return new Promise((resolve, reject) => {
        const team = rootGetters['teams/current'];
        if (team === null) {
            resolve([])
        }
        params['teamId'] = team.id;
        commit('hintsStatusRequest');
        api.cards.cardsHints(params).then(res => {
            commit('hintsStatusSuccess', res);
            resolve(res.data)
        }).catch(err => {
            commit('hintsStatusFailure', err);
            reject(err)
        })
    })
};

export const search = ({commit, rootGetters}, params) => {
    return new Promise((resolve, reject) => {
        const team = rootGetters['teams/current'];
        if (team === null) {
            resolve([])
        }
        params['teamId'] = team.id;
        commit('searchStatusRequest');
        api.cards.search(params).then(res => {
            commit('searchStatusSuccess', res);
            resolve(res.data.data || [])
        }).catch(err => {
            commit('searchStatusFailure', err);
            reject(err)
        })
    })
};