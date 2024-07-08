const data = [
    {
        title: 'Роль информационных технологий в науке 0',
        img: 'https://avgrodno.by/wp-content/uploads/2023/12/1.png',
        tags: ['статья', 'химия'],
        trend: 'khimiya',
        publication_date: '01.05.2024',
        show: 5,
        like: 22,
        id: 1
    },
    {
        title: 'IT-технологии в физике: новые горизонты исследований',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6537a73b3831625d2305a172_6537bd8c3e0e3332ecb4db8c/scale_1200',
        tags: ['статья', 'химия'],
        trend: 'khimiya',
        publication_date: '01.05.2024',
        show: 15,
        like: 22,
        id: 2
    },
    {
        title: 'Роль информационных технологий в науке 2',
        img: 'https://100-faktov.ru/wp-content/uploads/2018/02/752ab2667107d0101a1b.jpg',
        tags: ['статья', 'химия'],
        trend: 'khimiya',
        publication_date: '01.05.2024',
        show: 5,
        like: 22, id: 3
    },
    {
        title: 'Робототехника: будущее уже здесь 3',
        img: 'https://tlt.ru/wp-content/uploads/2023/03/1647644330_2-amiel-club-p-fizika-krasivie-kartinki-2.jpg',
        tags: ['статья', 'химия'],
        trend: 'khimiya',
        publication_date: '01.05.2024',
        show: 45,
        like: 22, id: 4
    },
    {
        title: 'Роль информационных технологий в науке 4',
        img: 'https://sotni.ru/wp-content/uploads/2023/08/matematicheskii-fon-74.webp',
        tags: ['статья', 'биология'],
        trend: 'biologiya',
        publication_date: '01.05.2024',
        show: 5,
        like: 22, id: 5
    },
    {
        title: 'Роль информационных технологий в науке 5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeqnRVA6B4P-iBX-aIJzn0GwcHW6pRn2fcA&s',
        tags: ['статья', 'физика'],
        trend: 'fizika',
        publication_date: '01.05.2024',
        show: 45,
        like: 22, id: 6
    },
    {
        title: 'Роль информационных технологий в науке 6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WnGrsDiOQjfDpl4EZjg5hIyScMnM2OFSY6lXVuIZicO_ITeEwR_lN4_bQAcIDpvArTk&usqp=CAU',
        tags: ['статья', 'физика'],
        trend: 'fizika',
        publication_date: '01.05.2024',
        show: 45,
        like: 22, id: 7
    },
    {
        title: 'Роль информационных технологий в науке 7',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosrHSmWyhPwruO5DgLROpl6X0-75-OuXQiCv6U24gb-uWsapXsG4nYq0HZmz3xvGTemk&usqp=CAU',
        tags: ['статья', 'физика'],
        trend: 'fizika',
        publication_date: '01.05.2024',
        show: 5,
        like: 22, id: 8
    },
    {
        title: 'Роль информационных технологий в науке 8',
        img: 'https://cdnn21.img.ria.ru/images/07e7/04/0c/1864817072_0:222:3068:1948_1920x0_80_0_0_cc85f54135fd8b85116bda169e5a945e.jpg',
        tags: ['статья', 'роботехника'],
        trend: 'robototekhnika',
        publication_date: '01.05.2024',
        show: 45,
        like: 22, id: 9
    },
    {
        title: 'Роль информационных технологий в науке 9',
        img: 'https://acropolis.org.ru/img/site/image/calennum7148/imgtop/chemistry-engine.jpg',
        tags: ['статья', 'роботехника'],
        trend: 'robototekhnika',
        publication_date: '01.05.2024',
        show: 15,
        like: 22, id: 10
    },
    {
        title: 'Роль информационных технологий в науке 10',
        img: 'https://www.ystu.ru/upload/resize_cache/webp/iblock/3e4/dd7pgkmdmlce8qmx6jm118b2sa7hegzh/1674659573_top_fon_com_p_fon_dlya_prezentatsii_farmatsevtika_195.webp',
        tags: ['статья', 'роботехника'],
        trend: 'robototekhnika',
        publication_date: '01.05.2024',
        show: 65,
        like: 22, id: 11
    },
    {
        title: 'Роль информационных технологий в науке 11',
        img: 'https://sotni.ru/wp-content/uploads/2023/08/biologiia-2.webp',
        tags: ['статья', 'биология'],
        trend: 'biologiya',
        publication_date: '01.05.2024',
        show: 25,
        like: 22, id: 12
    },
]


export function getById (id) {
    return data.filter(el => {
        return el.id === id})
}

export function randomArticle (id, count) {
    const idArr = [id];
    const arrContnent = [];

    while (arrContnent.length < count) {
        let randomIndex = Math.floor(Math.random() * data.length);
        if (!idArr.includes(randomIndex)) {
            idArr.push(randomIndex);
            arrContnent.push(data[randomIndex]);
        }
    }
    return arrContnent
}

export function getAll () {
    return data
}

export function getTrend (trend) {
    return data.filter(el => el.trend === trend)
}



