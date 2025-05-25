'use client'
import { MatchData } from "@/lib/matches.interface";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import React, { useCallback, useEffect, useState } from "react";
import MonthMatchesBlock from "./MonthMatchesBlock/MonthMatchesBlock";

export default function MatchList(props: { data: MatchData }) {

    const data = props.data;

    const [datesVisibleMatches, setDatesVisibleMatches] = useState<{
        startYear: string, endYear: string | null
    } | null>(null)

    const [filteredData, setFilteredData] = useState<MatchData>([]);

    const [typeVisibleMatches, setTypeVisibleMatches] = useState<string>('ВСЕ МАТЧИ')

    const typesForFilter = [
        { title: 'ВСЕ МАТЧИ', returnedValue: 'ВСЕ МАТЧИ' },
        { title: 'ЧЕМПИОНАТ', returnedValue: 'ЧЕМПИОНАТ' },
        { title: 'КУБОК', returnedValue: 'КУБОК' },
        { title: 'ПРОЧЕЕ', returnedValue: 'ПРОЧЕЕ' },
    ]

    //Определение доступных дат (годов) для фильтрации
    const datesForFilter = data.map((element, index) => {
        // Проверяем, если это последний элемент или массив содержит одну дату
        const nextYear = data[index + 1]?.date_year || null;

        // Если это единственная дата или если это не последний элемент
        if (data.length === 1 || nextYear !== null) {
            const finalTextDropdownElement = element.date_year +
                `${nextYear ? "/" + nextYear.slice(nextYear.length - 2) : ''}`;

            return {
                returnedValue: {
                    startYear: element.date_year,
                    endYear: nextYear,
                },
                title: finalTextDropdownElement
            };
        } else {
            // Возвращаем null для последнего элемента без следующего года
            return null;
        }

    }).filter(item => item !== null); // Убираем все null значения из массива

    useEffect(() => {
        datesForFilter.length > 0 ? setDatesVisibleMatches(
            {
                startYear: datesForFilter[datesForFilter.length - 1].returnedValue.startYear,
                endYear: datesForFilter[datesForFilter.length - 1].returnedValue.endYear
            }
        ) : null
    }, []);
    useEffect(() => {
        if (!datesVisibleMatches) return;

        const { startYear, endYear } = datesVisibleMatches;

        const filtered = data
            .filter(
                (yearBlock) =>
                    yearBlock.date_year === startYear ||
                    (endYear !== null && yearBlock.date_year === endYear)
            )
            .map((yearBlock) => {
                const filteredMonths = yearBlock.matchesByMonth
                    .map((monthBlock) => {
                        const filteredMatches =
                            typeVisibleMatches === 'ВСЕ МАТЧИ'
                                ? monthBlock.matches
                                : monthBlock.matches.filter(
                                    (match) => match.tournament === typeVisibleMatches
                                );

                        // Сортировка матчей по дню и времени (в убывающем порядке)
                        const sortedMatches = filteredMatches.sort((a, b) => {
                            const dateA = new Date(`${yearBlock.date_year}-${monthBlock.date_month}-${a.day}T${a.time}`);
                            const dateB = new Date(`${yearBlock.date_year}-${monthBlock.date_month}-${b.day}T${b.time}`);
                            return dateB.getTime() - dateA.getTime(); // убывание
                        });

                        return {
                            ...monthBlock,
                            matches: sortedMatches,
                        };
                    })
                    .filter((month) => month.matches.length > 0)
                    .sort((a, b) => Number(b.date_month) - Number(a.date_month)); // 🔽 месяцы

                return {
                    ...yearBlock,
                    matchesByMonth: filteredMonths,
                };
            })
            .filter((year) => year.matchesByMonth.length > 0)
            .sort((a, b) => Number(b.date_year) - Number(a.date_year)); // 🔽 года

        setFilteredData(filtered);
    }, [data, datesVisibleMatches, typeVisibleMatches]);


    return (
        <div className="w-full flex flex-col justify-start items-center gap-[45px]">
            <div className="z-30 w-full flex flex-row justify-start items-start gap-[10px]">
                {
                    datesForFilter.length > 0 ?
                        <DropdownFilter
                            elements={datesForFilter.slice().reverse()}
                            handleSelectSetState={(activeDates) => setDatesVisibleMatches(activeDates)}
                        /> : null
                }
                {
                    datesForFilter.length > 0 ?
                        <DropdownFilter
                            elements={typesForFilter}
                            handleSelectSetState={(activeType) => setTypeVisibleMatches(activeType)}
                        /> : null
                }
            </div>
            {
                filteredData.map((mathcesByYear, index) => {
                    return (
                        <React.Fragment key={`year-${mathcesByYear.date_year}`}>
                            {
                                mathcesByYear.matchesByMonth.map((mathcesByMonth, index) => {
                                    return (
                                        <MonthMatchesBlock
                                            key={
                                                'Блок матчей-' +
                                                mathcesByYear.date_year + '-' +
                                                mathcesByMonth.date_month + '-index=' + index
                                            }
                                            year={mathcesByYear.date_year}
                                            month={mathcesByMonth.date_month}
                                            matches={mathcesByMonth.matches}
                                        />
                                    )
                                })
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}