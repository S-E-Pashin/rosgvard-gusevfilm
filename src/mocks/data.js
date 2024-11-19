export let pageMocks = {
  'База знаний': {
    heading: 'Настройки профиля',
    sections: [
      {
        active: true,
        name: 'Первичная настройка',
        area: [
          {
            type: 'recommendation',
            heading: 'Первичная настройка',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam labore quos facere iusto, obcaecati doloremque aliquid est.',
            recommendationText: 'Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Fugiat.'
          },
          {
            type: 'enumeration',
            heading: 'Начало работы',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, iste animi, quia numquam, rerum veritatis itaque tempore facilis repellendus harum reiciendis.',
            enumerationItems: [
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.',
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum delectus nemo iure praesentium amet, maxime veniam.',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut nam earum! Lorem ipsum dolor sit amet.',
            ]
          },
          {
            type: 'tabs',
            heading: 'Дополнительная информация',
            items: [
              {
                name: 'Пункт 11',
                text: [
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est.',
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat.'
                ],
                active: true,
              },
              {
                name: 'Пункт 10',
                text: [
                  'ываывафывафывафываывафа',
                  'авпваыпважыэдлджьжэдловащджлырьпщзэыукенщзрдьлджваьджьвсмдэыпьдывапжщот',
                ],
                active: false,
              },
              {
                name: 'Пункт 9',
                text: [
                  'Lorem ipsum ',
                  'Lorem, ipsum ',
                ],
                active: false,
              },

            ]
          },
          {
            type: 'question',
            heading: 'Вам помогла эта статья?',

          }
        ]
      },
      {
        active: false,
        name: 'Профиль пользователя',
        area: [
          {
            type: 'recommendation',
            heading: 'Первичная настройка',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam labore quos facere iusto, obcaecati doloremque aliquid est.',
            recommendationText: 'Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Fugiat.',
          },
          {
            type: 'enumeration',
            heading: 'Начало работы',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, iste animi, quia numquam, rerum veritatis itaque tempore facilis repellendus harum reiciendis.',
            enumerationItems: [
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.',
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum delectus nemo iure praesentium amet, maxime veniam.',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut nam earum! Lorem ipsum dolor sit amet.',
            ]
          },
          {
            type: 'items',
            heading: 'Дополнительная информация',
            items: [
              {
                name: 'Пункт 11',
                text: [
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est.',
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat.'
                ],
                active: true,
              },
              {
                name: 'Пункт 10',
                text: [
                  'ываывафывафывафываывафа',
                  'авпваыпважыэдлджьжэдловащджлырьпщзэыукенщзрдьлджваьджьвсмдэыпьдывапжщот',
                ],
                active: false,
              },
              {
                name: 'Пункт 9',
                text: [
                  'Lorem ipsum ',
                  'Lorem, ipsum ',
                ],
                active: false,
              },

            ]
          },
          {
            type: 'question',
            heading: 'Вам помогла эта статья?',

          }
        ]
      }
    ]

  }
};
