import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import flag from '../assets/flag/argentina.png';
import photo from '../assets/img/ponce.png';



export const fetchStats = createAsyncThunk(
    "statistics/fetchStats",
    async (_, {getState, rejectWithValue}) => {
        const teamID = getState().teamID
        try {
            const response1 = await fetch('/api/v1/games/{game_id}/lineup/?team_id={team_id}')
            if (!response1.ok) {
                throw new Error('Failed to get team players...')
            }
            const players = response1.json()

            const response2 = await fetch('/api/v1/stats/features/?game_id={game_id}&team_id={team_id}')
            if (!response2.ok) {
                throw new Error('Failed to get statistics...')
            }
            const stats = response2.json()

            return {players, stats}

        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)


const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        team: 'spartak',
        teamID: null,
        gameID: null,
        players: [
            {id: 1, name: 'Игрок 1',  indicator: '8.2'},
            {id: 2, name: 'Игрок 2',  indicator: '7.2'},
            {id: 3, name: 'Игрок 3',  indicator: '6.5'},
            {id: 4, name: 'Игрок 4',  indicator: '9.2'},
            {id: 5, name: 'Игрок 5',  indicator: '8.5'},
            {id: 6, name: 'Игрок 6',  indicator: '8.1'},
            {id: 7, name: 'Игрок 7',  indicator: '8.6'},
            {id: 8, name: 'Игрок 8',  indicator: '9.3'},
            {id: 9, name: 'Игрок 9',  indicator: '9.0'},
            {id: 10, name: 'Игрок 10', indicator: '8.0'},
            {id: 11, name: 'Игрок 11',  indicator: '8.2'}
        ],
        currentPlayer:  {id: 1, name: 'Игрок 1', flag: flag, role: 'LW', photo: photo, number: 19, indicator: '8.2',  metrics: [
            {name: 'Метрика 1', value: 2.5},
            {name: 'Метрика 2', value: 1.5},
            {name: 'Метрика 3', value: 2.1},
            {name: 'Метрика 4', value: 1.7},
            {name: 'Метрика 5', value: -0.5},
            {name: 'Метрика 6', value: -1},
            {name: 'Метрика 7', value: 0.8},
            {name: 'Метрика 8', value: 1.3}
            ]
       },
        stats: [
            {id: 1, name: 'Игрок 1', flag: flag, role: 'LW', photo: photo, number: 19, indicator: '8.2',  metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
           },
           {id: 2, name: 'Игрок 2', flag: flag, role: 'RW', photo: photo, number: 7, indicator: '7.2', metrics: [
                {name: 'Метрика 1', value: 3},
                {name: 'Метрика 2', value: 0.5},
                {name: 'Метрика 3', value: -2.1},
                {name: 'Метрика 4', value: -1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: 0},
                {name: 'Метрика 7', value: 0.2},
                {name: 'Метрика 8', value: 1.9}
                ]
            },
            {id: 3, name: 'Игрок 3', flag: flag, role: 'LW', photo: photo, number: 8, indicator: '6.5', metrics: [
                {name: 'Метрика 1', value: 5},
                {name: 'Метрика 2', value: 1},
                {name: 'Метрика 3', value: 2},
                {name: 'Метрика 4', value: -1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -2},
                {name: 'Метрика 7', value: 0.3},
                {name: 'Метрика 8', value: 3}
                ]
            },
            {id: 4, name: 'Игрок 4', flag: flag, role: 'RW', photo: photo, number: 9, indicator: '9.2', metrics: [
                    {name: 'Метрика 1', value: 1.2},
                    {name: 'Метрика 2', value: 1.5},
                    {name: 'Метрика 3', value: -1},
                    {name: 'Метрика 4', value: 2.6},
                    {name: 'Метрика 5', value: -0.5},
                    {name: 'Метрика 6', value: -1},
                    {name: 'Метрика 7', value: 3.1},
                    {name: 'Метрика 8', value: 1.3}
                    ]
            },
            {id: 5, name: 'Игрок 5', flag: flag, role: 'RW', photo: photo, number: 10, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 2.8},
                {name: 'Метрика 3', value: 0.9},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: -0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            },
            {id: 6, name: 'Игрок 6', flag: flag, role: 'RW', photo: photo, number: 11, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            },
            {id: 7, name: 'Игрок 7', flag: flag, role: 'RW', photo: photo, number: 12, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: -1.3}
                ]
            },
            {id: 8, name: 'Игрок 8', flag: flag, role: 'RW', photo: photo, number: 13, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: -2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            },
            {id: 9, name: 'Игрок 9', flag: flag, role: 'RW', photo: photo, number: 14, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: 1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            },
            {id: 10, name: 'Игрок 10', flag: flag, role: 'RW', photo: photo, number: 15, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: -1.5},
                {name: 'Метрика 3', value: -2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: -0.5},
                {name: 'Метрика 6', value: -1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            },
            {id: 11, name: 'Игрок 11', flag: flag, role: 'RW', photo: photo, number: 16, indicator: '9.2', metrics: [
                {name: 'Метрика 1', value: 2.5},
                {name: 'Метрика 2', value: 1.5},
                {name: 'Метрика 3', value: 2.1},
                {name: 'Метрика 4', value: 1.7},
                {name: 'Метрика 5', value: 0.5},
                {name: 'Метрика 6', value: 1},
                {name: 'Метрика 7', value: 0.8},
                {name: 'Метрика 8', value: 1.3}
                ]
            }
    ],
    status: null      
    },
    reducers: {
        setTeamID(state, action) {
            state.teamID = action.payload
        },
        setGameID(state, action) {
            state.gameID = action.payload
        },
        setTeam(state,action) {
            state.team = action.payload
        },
        setCurrentPlayer(state, action) {
            const id = action.payload
            const player = state.stats.find((el) => el.id === id)
            state.currentPlayer = player
        }
    },

    extraReducers: {
        [fetchStats.pending]: (state)=>{
            state.status = 'loading'
        },
        [fetchStats.fullfilled]: (state, action)=>{
            state.status = 'success'
            state.players = action.payload.players
            state.stats = action.payload.stats
        },
        [fetchStats.rejected]: (state, action)=>{
            state.status = 'error'
            console.log(action.payload)
        },
    }
    
})


const store = configureStore({
    reducer: statisticsSlice.reducer
})

export default store;
export const { setTeamID, setGameID, setTeam, setCurrentPlayer } = statisticsSlice.actions