import { useState, useEffect } from "react";

const Pagination = ({ pages, setCurrentPage, currentUsers, users }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div class="clearfix">
      <div class="hint-text">
        Showing <b>{currentUsers.length}</b> out of <b>{users.length}</b>{" "}
        entries
      </div>
      <nav aria-label="Page navigation ">
        <ul class="pagination  justify-content-end">
          <li class={currentButton === 1 ? "page-item disabled" : "page-item"}>
            <a
              class="page-link"
              href="#"
              tabindex="-1"
              onClick={() =>
                setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
              }
            >
              Previous
            </a>
          </li>

          {numOfPages.map((page, index) => {
            return (
              <li
                key={index}
                class={
                  currentButton === page ? "page-item active" : "page-item"
                }
              >
                <a
                  class="page-link"
                  href="#"
                  onClick={() => setCurrentButton(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}

          <li
            class={
              currentButton === numOfPages.lenght
                ? "page-item disabled"
                : "page-item"
            }
          >
            <a
              class="page-link"
              href="#"
              tabindex="-1"
              onClick={() =>
                setCurrentButton((next) =>
                  next === numOfPages.length ? next : next + 1
                )
              }
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
