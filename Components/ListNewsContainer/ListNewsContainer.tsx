'use client'
import { useState } from "react";
import ReactPaginate from "react-paginate";
import NewsCard from "@/Components/NewsCard/NewsCard";
import './style.css'

export default function ListNewsContainer() {

  // Статические данные новостей
  const newsDescription = `Нашего молодого и перспективного центрального защитника, воспитанника нашей школы футбола (тренеры Ронжин Н.Г., Маслов А.М.)! `

  const news = new Array(40).fill(null).map((value, index) => ({ id: index + 1, date: "2025-01-01", title: "Новость " + (index + 1), newsDescription, src: '' }))

  // Устанавливаем количество элементов на странице
  const itemsPerPage = 12;

  // Состояние для текущей страницы
  const [currentPage, setCurrentPage] = useState(0);

  // Функция обработки переключения страницы
  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected);
  };

  // Отображаемые новости для текущей страницы
  const displayedNews = news.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
      <div className="flex flex-col gap-[30px] items-center">
        <div className="flex flex-row justify-center flex-wrap gap-[20px] max-w-[1200px]">
          {displayedNews.map((news) => {
            return(
              <NewsCard 
                key={news.title + '-idNews=' + news.id}
                date={news.date}
                id={news.id}
                title={news.title}
                newsDescription={news.newsDescription}
              />
            )
          })}
        </div>
        <div className="flex w-full max-w-[1200px] justify-center pt-[16px] pb-[16px]">
          {/* Пагинация */}
          <ReactPaginate
            pageCount={Math.ceil(news.length / itemsPerPage)} // Количество страниц
            pageRangeDisplayed={5} // Количество отображаемых страниц рядом с текущей
            marginPagesDisplayed={2} // Количество отображаемых страниц в начале и в конце
            breakLabel='...' // Символ 
            onPageChange={handlePageClick} // Обработчик смены страницы
            containerClassName="pagination" // Класс для контейнера пагинации
            pageClassName="paginationButton paginationCursor"
            pageLinkClassName="paginationCursor paginationLink"
            disabledClassName="paginationDisableButton paginationCursor"
            activeClassName="paginationActiveButton paginationCursor" // Класс для активной страницы
            previousClassName="paginationButton paginationCursor paginationPrevious paginationLink"
            nextLinkClassName="paginationButton paginationCursor paginationNext paginationLink"
            previousLinkClassName="paginationButton paginationCursor paginationPrevious paginationLink"
            breakClassName="paginationButton paginationCursor"
            breakLinkClassName="aginationButton paginationCursor"
            previousLabel="‹" // Символ для предыдущей страницы
            nextLabel="›" // Символ для следующей страницы
            
          />
        </div>
      </div>
  );
};
