import React, { useState, useEffect } from "react";
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

const Paginations = (props) => {
    const { totalRecords, pageLimit, pageNeighbours, onPageChanged, onLeftPageChanged, onRightPageChanged, currentPage } = props;
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageLimit));
    });

    const fetchPageNumbers = () => {
        const totalNumbers = pageNeighbours * 2 + 1;
        const totalBlocks = totalNumbers;
        if (totalPages > totalBlocks) {
            const startPage = Math.max(currentPage + 1);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage)

            return [LEFT_PAGE, currentPage, ...pages, "...", totalPages, RIGHT_PAGE];
        }
        return range(1, totalPages);
    };
    console.log("Current page: " + currentPage + "PageNeighbors: " + pageNeighbours)

    const pages = fetchPageNumbers() || [];
    return (
        <nav aria-label="Countries Pagination">
            <ul className="pagination ">
                {pages.map((page, index) => {
                    if (page === LEFT_PAGE)
                        return (
                            <li key={index} className="page-item ">
                                <a
                                    href="/"
                                    className="page-link flex w-11 h-8 bg-gray-page-0 justify-center items-center rounded mx-1"
                                    aria-label="Previous"
                                    // onClick={(e) => onLeftPageChanged(e, pageNeighbours)}
                                    onClick={(e) => onLeftPageChanged(e, currentPage - 1)}
                                >
                                    <span className=" " aria-hidden="true"><img src={leftArrow} alt='leftarrow' /></span>
                                </a>
                            </li>

                        );
                    if (page === RIGHT_PAGE)
                        return (
                            <li key={index} className="page-item ">
                                <a className="page-link flex w-11 h-8 bg-gray-page-0 justify-center items-center rounded mx-1 " href="/" aria-label="Next"
                                    // onClick={(e) => onRightPageChanged(e, pageNeighbours)}
                                    onClick={(e) => onRightPageChanged(e, pageNeighbours)}
                                >
                                    <span className=" " aria-hidden="true"><img src={rightArrow} /></span>
                                </a>
                            </li>
                        );
                    return (
                        <li
                            key={index}
                            className={`page-item${currentPage === page ? " active" : ""}`}
                        >
                            <a
                                className="page-link flex w-7 h-8 bg-gray-page-0 justify-center items-center rounded mx-1"
                                href="/"
                                onClick={(e) => onPageChanged(e, page)}
                            >
                                {page}
                            </a>
                        </li>
                    );

                })}
            </ul>
        </nav >
    );
};

export default Paginations;
