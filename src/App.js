/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import shortid from "shortid";
import Block from "./components/Block.js";
import TitleBlockList from "./components/TitleBlockList.js";
import List from "./components/List.js";
import ListItem from "./components/ListItem.js";
import AdditionalBlock from "./components/AdditionalBlock.js";
import Informers from "./components/Informers.js";
import Search from "./components/Search.js";
import Advertising from "./components/Advertising.js";
import Weather from "./components/Weather.js";

function App() {
  const titleNews = [
    {
      href: "#",
      text: "Сейчас в СМИ",
    },
    {
      href: "#",
      text: "в Германии",
    },
    {
      href: "#",
      text: "Рекомендуем",
    },
  ];

  const listNews = [
    {
      icon: "icon",
      href: "#",
      title: "Новость 1",
    },
    {
      icon: "icon",
      href: "#",
      title: "Новость 2",
    },
    {
      icon: "icon",
      href: "#",
      title: "Новость 3",
    },
    {
      icon: "icon",
      href: "#",
      title: "Новость 4",
    },
    {
      icon: "icon",
      href: "#",
      title: "Новость 5",
    },
  ];

  const dataAdditionalBlock = {
    img: "/",
    href: "#",
    title: "Работа над ошибками",
    text: "Смотрите на Яндексе и запоминайте",
  };

  const menuSearchLink = [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир",
    "ещё",
  ];

  const dataAdvertising = {
    img: "/",
    href: "#",
  };

  const dataVisited = [
    {
      href: "#",
      title: "Недвижимость",
      text: " - о сталинках",
    },
    {
      href: "#",
      title: "Маркет",
      text: " - люстры и люстры",
    },
    {
      href: "#",
      title: "Авто.ру",
      text: " - привод 4х4 до 500 000",
    },
  ];

  const tvProgramm = [
    {
      href: "#",
      title: "02:00 THT.Best",
      text: " THT International",
    },
    {
      href: "#",
      title: "02:15 Джинглики",
      text: " Карусель INT",
    },
    {
      href: "#",
      title: "02:25 Наедине со всеми",
      text: " Первый",
    },
  ];

  const dataStream = [
    {
      icon: "icon",
      href: "#",
      title: "Управление как исскуство",
      text: " Успех",
    },
    {
      icon: "icon",
      href: "#",
      title: "Ночь. Мир в это время",
      text: " earthTV",
    },
    {
      icon: "icon",
      href: "#",
      title: "АндрейВозн...",
      text: " Совершенно секретно",
    },
  ];

  return (
    <React.Fragment>
      <Block className="top-block">
        <Block className="news">
          <TitleBlockList items={titleNews}>
            <span className="date">19 сентября, среда 08 24</span>
          </TitleBlockList>
          <List>
            {listNews.map((item) => (
              <ListItem key={shortid.generate()} item={item} />
            ))}
          </List>
          <Block className="informers">
            <Informers />
          </Block>
        </Block>
        <Block className="additionalblock">
          <AdditionalBlock {...dataAdditionalBlock} />
        </Block>
      </Block>
      <Block className="search">
        {menuSearchLink.map((item) => (
          <a key={shortid.generate()} href="#">
            {item}
          </a>
        ))}
        <Search />
        <span>
          Найдется всё. Например,{" "}
          <span className="exa-searche">Как приготовить яблочный пирог</span>
        </span>
      </Block>
      <Block className="Advertising">
        <Advertising {...dataAdvertising} />
      </Block>
      <Block className="columns">
        <Block className="col-4">
          <Block className="weather">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Погода",
                },
              ]}
            />
            <Weather />
          </Block>
          <Block className="visited">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Посещаемое",
                },
              ]}
            />
            <List>
              {dataVisited.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="maps">
            <a href="#">Карта Германии</a>
            <p>Расписание</p>
          </Block>
          <Block className="tv">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Телепрограмма",
                },
              ]}
            >
              <span className="tv-show">Эфир</span>
            </TitleBlockList>
            <List>
              {tvProgramm.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="stream">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Эфир",
                },
              ]}
            />
            <List>
              {dataStream.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  );
}

export default App;