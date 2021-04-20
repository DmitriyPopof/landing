import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: ' Banner0_0',
        children: 'Первый',
        className: 'menu-item',
      },
      {
        name: 'linkNav~knd2syj4oe',
        to: 'Content0_0',
        children: 'Второй',
        className: 'menu-item',
      },
      {
        name: 'linkNav~knd2szfgmhp',
        to: 'Content1_0',
        children: 'Третий',
        className: 'menu-item',
      },
      {
        name: 'linkNav~knd2t0c4dkj',
        to: 'Content3_0',
        children: 'Четвертый',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper knd3fdj4ibe-editor_css' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>Эффективное решение для анимации страниц</p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button knd3ehx3et-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <blockquote>WhatsApp</blockquote>
            </span>
          </span>
        </span>
      </span>
    ),
    target: '',
    type: 'default',
    href: 'https://wa.me/79166329978',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Продукты и услуги</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Универсальный доступ для бизнеса</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Эффективность продуктов для оплаты, расчетов и доступа к
                    учету выросла в 4 раза.
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>Единый мониторинг рисков при возникновении события</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Возможности предварительного контроля рисков и контроля
                    качества во всех ссылках конфигурации требований
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>Универсальная операция с данными</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Накапливайте данные об эффективности доступа к товарам и
                    операционной эффективности второго сорта
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title knd2jjjoi9-editor_css',
    children: (
      <span>
        <p>Управление ресурсами предприятия</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Централизованная оркестровка облачных ресурсов, эластичное
          масштабирование, непрерывный выпуск и развертывание, высокая
          доступность и отказоустойчивость. Централизованная оркестровка
          облачных ресурсов, эластичное масштабирование, непрерывный выпуск и
          развертывание, высокая доступность и отказоустойчивость.
          Централизованная оркестровка облачных ресурсов, эластичное
          масштабирование, непрерывный выпуск и развертывание, высокая
          доступность и отказоустойчивость.
        </p>
      </span>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Ant Financial Cloud предоставляет профессиональные услуги</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>На основе мощных базовых ресурсов Alibaba Cloud</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Управление ресурсами предприятия</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Централизованная оркестровка облачных ресурсов, эластичное
                  масштабирование, непрерывный выпуск и развертывание, высокая
                  доступность и отказоустойчивость.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Облачная безопасность</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Полная система облачной безопасности, построенная в
                  соответствии с требованиями безопасности финансовых
                  предприятий, чтобы полностью гарантировать безопасность
                  финансовых приложений и данных.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Облачный мониторинг</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Централизованный мониторинг распределенной облачной среды,
                      единый просмотр состояния ресурсов и приложений,
                      интеллектуальный анализ и поиск неисправностей.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Мобильный</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Универсальная разработка мобильного финансового приложения и
                  всесторонний мониторинг; множество доступных компонентов,
                  динамический выпуск и горячий ремонт неисправностей.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Распределенное промежуточное ПО</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Промежуточное ПО для обработки онлайн-транзакций финансового
                  уровня, крупномасштабные распределенные компьютеры и десятки
                  тысяч транзакций / параллелизм второго уровня строго
                  гарантируют единство данных транзакций.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Большое количество данных</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Универсальная платформа для совместной работы с большими
                  данными полного цикла, обработка данных на уровне PB,
                  инструменты анализа данных на уровне миллисекунд.
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer0-wrapper knd344ohne-editor_css',
  },
  OverPack: { className: 'home-page footer0', playScale: 0.05, replay: false },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>©2021 DmitriyPopof All Rights Reserved</span>
        </span>
      </span>
    ),
  },
};
