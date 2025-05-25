import { NextResponse } from 'next/server'

export async function GET() {
    const data = [
        {
            date_year: '2025',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2024',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                },
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2023',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2022',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2021',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2020',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2019',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        },
        {
            date_year: '2018',
            matchesByMonth: [
                {
                    date_month: '01',
                    matches: [
                        {
                            day: '01',
                            time: '10:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 3,
                            guest_score: 5,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '01',
                            time: '13:00',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 1,
                            guest_score: 1,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Чемпионат'
                        },
                        {
                            day: '02',
                            time: '12:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Кубок'
                        },
                        {
                            day: '02',
                            time: '15:15',
                            host: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            guest: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: true
                            },
                            tournament: 'Прочее'
                        },
                        {
                            day: '03',
                            time: '17:30',
                            host: {
                                name: "«CШОР Сокол-М»",
                                img: ''
                            },
                            guest: {
                                name: "«Ижевск»",
                                img: ''
                            },
                            host_score: 0,
                            guest_score: 0,
                            stadium: {
                                name: '«Название» Ижевск',
                                is_home: false
                            },
                            tournament: 'Прочее'
                        },
                    ]
                }
            ]
        }


    ]

  return NextResponse.json(data.sort((a,b) => Number(a.date_year) - Number(b.date_year)));
}