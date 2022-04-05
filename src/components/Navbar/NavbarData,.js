import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TokenIcon from "@mui/icons-material/Token";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    className: "menu-item__link",
  },
  {
    title: "Anime",
    path: "/anime",
    icon: <TokenIcon />,
    className: "menu-item__link",
  },
  {
    title: "Series",
    path: "/series",
    icon: <MovieFilterIcon />,
    className: "menu-item__link",
  },
  {
    title: "News",
    path: "/news",
    icon: <NewspaperIcon />,
    className: "menu-item__link",
  },
];

export const ListGenreData = [
  {
    title: "All",
    path: "",
    cName: "genre-btn",
  },
  {
    title: "Action",
    path: "/anime/action",
    cName: "genre-btn",
  },
  {
    title: "Romance",
    path: "/anime/romance",
    cName: "genre-btn",
  },
  {
    title: "Comedy",
    path: "/anime/comedy",
    cName: "genre-btn",
  },
  {
    title: "School",
    path: "/anime/school",
    cName: "genre-btn",
  },
  {
    title: "Adventure",
    path: "/anime/adventure",
    cName: "genre-btn",
  },
  {
    title: "Drama",
    path: "/anime/drama",
    cName: "genre-btn",
  },
  {
    title: "NTR",
    path: "/anime/ntr",
    cName: "genre-btn",
  },
];
