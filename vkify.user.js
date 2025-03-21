// ==UserScript==
// @name         VKify
// @namespace    http://tampermonkey.net/
// @version      2.1.3.1
// @description  Дополнительные штуки-друюки для VKify
// @author       koke228
// @match        *://ovk.to/*
// @match        *://openvk.xyz/*
// @match        *://vepurovk.xyz/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/koke228666/VKify/refs/heads/main/vkify.user.js
// @downloadURL  https://raw.githubusercontent.com/koke228666/VKify/refs/heads/main/vkify.user.js
// ==/UserScript==
try {
(function() {
    'use strict';
    /* доп. настройка овк (выключение AJAX и бесконечной прокрутки)*/
    if (Number(localStorage.getItem('ux.auto_scroll')) == 1) {
        localStorage.setItem('ux.auto_scroll', 0)
    }
    /*if (Number(localStorage.getItem('ux.disable_ajax_routing')) == 0) {
        localStorage.setItem('ux.disable_ajax_routing', 1);
        location.reload();
    } я надеюсь, что выключать ajax больше не понадобится */
    const localloc = localStorage.getItem('localizationdata');
    const ru_RU = `{
    "vknaming": "ВКонтакте",
    "selectphsmall": "(подписью будет то, что вы указали в поле для сообщения)",
    "headmusic": "музыка",
    "headpeople": "люди",
    "headgroups": "сообщества",
    "headgames": "игры",
    "headsupport": "помощь",
    "headlogout": "выйти",
    "footerabout": "о сайте",
    "footersupport": "техподдержка",
    "footerblog": "блог",
    "footerterms": "правила",
    "vkifysettings": "Настройки VKify",
    "vkifyfootersett": "Кнопка VKify в футере",
    "vkifyfootersettdesc": "Вы сможете всегда открыть эту страницу через <b><a href=\\"/settings?vkify\\">эту ссылку</a></b>",
    "vkifyrealvkify": "Абсолютная ВКфикация",
    "vkifyrealvkifydesc": " - пытаемся заменить абсолютно все упоминания OpenVK со страницы на \\"ВКонтакте\\" (<b style=\\"color: red;\\">ОСТОРОЖНО! Может заменить то, чего не стоило бы</b>, однако, выглядит прикольно)",
    "vkifyvk2012": "Имитация ВК 2012 вместо 2007",
    "vkifysupportedlinks": "*поддерживаются любые ссылки на картинки (.png, .gif, .jpg, etc)",
    "vkifyflatplayerbtns": "Использовать более плоские кнопки в плеере",
    "vkifyfartscroll": "Fartscroll",
    "vkifyfartscrolldesc": "Удалённая функция OpenVK",
    "vkifyenablevkemoji": "Использовать смайлики из ВКонтакте",
    "vkifyenablevkemojidesc": "Прекрасно и неповторимо",
    "vkifyproxyvkemoji": "Проксировать смайлики",
    "vkifyproxyvkemojidesc": "Смайлики будут сохраняться на сервере, а отсутствующие будут загружены с сервера Telegram",
    "vkifyadmavarepl": "Заменять аватарку <a href=\\"/id100\\">Администрации</a>",
    "vkifygifautoplay": "Автовоспроизведение GIF",
    "vkifyfaviconrepl": "Заменять favicon",
    "vkifylocalization": "JSON локализация VKify",
    "vkifyprofilebg": "Отображать фоны страниц",
    "vkifyverifiedpopup": "Страница этого пользователя верифицирована ВКонтакте",
    "vkifysaved": "Настройки сохранены!",
    "vkifysettingsfooter": "настройки VKify",
    "vkifygraffiti": "Использовать граффити из ВКонтакте за 2013 год",
    "graffitiflushhistory": "Очистить",
    "graffitibackhistory": "Отменить",
    "graffiticolor": "Цвет:",
    "graffitiopacity": "Интенсивность:",
    "graffitithickness": "Толщина:",
    "vkifyteamavarepl": "Заменять аватарку <a href=\\"/team\\">команды OpenVK</a>",
    "vkifyscrobble": "Скробблинг музыки",
    "vkifyaddlastfm": "войти в last.fm",
    "vkifylastfmtokentrue": "вход совершён",
    "vkifylastfmtokenfalse": "вход не совершён",
    "vkifylflogin": "Подтвердите вход на сайте Last.fm, затем нажмите ОК",
    "vkifylfloginsucc": "Last.fm успешно подключён!",
    "vkifylfloginerr": "Ошибка входа! Проверьте консоль.",
    "vkifyshowgift": "Отображать последний полученный подарок в боковом меню",
    "vkifyscrobbleacc_help": "Если у вас не работает скробблинг, то попробуйте войти заново",
    "vkifyaboutt": "О проекте",
    "vkifyabout": "<b>VKify</b> - маленький проект, который <i>пытается</i> приблизить дизайн OpenVK к ВКонтакте 2010-х годов.",
    "vkifylang": "Язык",
    "vkifysmusic": "Музыка",
    "vkifysmaint": "Основные",
    "vkifysmain": "Основные настройки",
    "vkifyignames": "Игнорируемые названия:",
    "vkifyigartists": "Игнорируемые исполнители:",
    "vkifyigtracks": "Игнорируемые ID треков:",
    "vkifyiglabel": "Треки, один из атрибутов которых есть в этом поле, не будут скробблиться. Каждое значение должно быть разделено запятой и пробелом (Alo Sounds, OpenVK)",
    "vkifycurrentlyplaying": "Сейчас воспроизводится: ",
    "vkifystar_like": "Использовать звёздочку вместо кнопки лайка",
    "vkifyonline": "Показывать онлайн (сайта в целом) в строке поиска",
    "vkifyonlinefr": "Показывать онлайн только друзей",
    "vkifyonlinefrpopup": "Для работы необходимо включить показ онлайна",
    "vkifyliketext": "Мне нравится",
    "vkifynewabout": "Использовать новый раздел информации о пользователе",
    "vkifynpfulls": "Показать подробную информацию",
    "vkifynpfullh": "Скрыть подробную информацию",
    "vkifyajplayere": "Показывать AJAX плеер OpenVK",
    "vkifyajplayerm": "Сделать AJAX плеер OpenVK маленьким",
    "vkifyajplayerstat": "Сделать AJAX плеер OpenVK статичным",
    "vkifylastfmlogout": "выйти из аккаунта",
    "vkifyloadmore": "Загрузить ещё",
    "vkifyflatbtns": "Использовать плоские кнопки"
}`;
    window.vkifyloadLocalization = function loadLocalization(loccode) {
        if (loccode == 'ru-RU') {
            document.getElementById('localization').value = '';
            return;
        }
        document.querySelector('#ajloader').style = "display: unset;"
        const url = `https://raw.githubusercontent.com/koke228666/VKify/refs/heads/main/${loccode}.json`;
        fetch(url)
            .then(response => {
            if (!response.ok) {
                alert('Ошибка загрузки локализации. Проверьте консоль.');
            }
            return response.json();
        })
            .then(data => {
            const locInp = document.getElementById('localization');
            if (locInp) {
                locInp.value = JSON.stringify(data);
                document.querySelector('#ajloader').style = "display: none;"
            }
        })
            .catch(error => {
            console.error('Произошла ошибка:', error);
        });
    }

    function mergeLocalization(mainLoc, defaultLoc) {
        const result = { ...defaultLoc };
        for (const key in mainLoc) {
            if (mainLoc.hasOwnProperty(key)) {
                result[key] = mainLoc[key];
            }
        }
        return result;
    }
    if (localloc) {
        try {
            var defaultlocalization = JSON.parse(ru_RU);
            var localization = mergeLocalization(JSON.parse(localloc), defaultlocalization);
        } catch (error) {
            console.error('vkify localization parsing error: ', error);
            var localization = JSON.parse(ru_RU);
        }
    } else {
        console.warn('vkify localization not found, using standard RU...');
        var localization = JSON.parse(ru_RU);
    }
    const firstload = localStorage.getItem('firstload');
    const enable_setts = localStorage.getItem('enable_vkify_settings');
    const enable_vk2012 = localStorage.getItem('vk2012');
    const vk2012_header_type = localStorage.getItem('vk2012_header_type');
    const realvkify = localStorage.getItem('realvkify');
    const enablefartscroll = localStorage.getItem('enablefartscroll');
    const enablevkemoji = localStorage.getItem('enablevkemoji');
    const proxyvkemoji = localStorage.getItem('proxyvkemoji');
    const flatplayerbtns = localStorage.getItem('flatplayerbtns');
    const customheader = localStorage.getItem('customheader');
    const adm_ava_repl = localStorage.getItem('adm_ava_repl');
    const adm_ava = localStorage.getItem('adm_ava');
    const gifsautoplay = localStorage.getItem('gifsautoplay');
    const faviconrepl = localStorage.getItem('faviconrepl');
    const faviconreplt = localStorage.getItem('faviconreplt');
    const profilebg = localStorage.getItem('profilebg');
    const vkgraffiti = localStorage.getItem('vkgraffiti');
    const team_ava_repl = localStorage.getItem('team_ava_repl');
    const team_ava = localStorage.getItem('team_ava');
    const enable_scrobble = localStorage.getItem('enable_scrobble');
    var lastfm_token = localStorage.getItem('LASTFM_TOKEN');
    var ignored_artists = localStorage.getItem('ignored_artists');
    var ignored_names = localStorage.getItem('ignored_names');
    var ignored_tracks = localStorage.getItem('ignored_tracks');
    const gifts_enabled = localStorage.getItem('gifts_enabled');
    const starlike = localStorage.getItem('starlike');
    const onlinea = localStorage.getItem('onlinea');
    const onlinefr = localStorage.getItem('onlinefr');
    const newabout = localStorage.getItem('newabout');
    const ajplayere = localStorage.getItem('ajplayere');
    const ajplayerm = localStorage.getItem('ajplayerm');
    const ajplayerstat = localStorage.getItem('ajplayerstat');
    const flatbuttons = localStorage.getItem('flatbuttons');
    if (!(firstload)) {
        localStorage.setItem('firstload', 'true')
        location.reload();
    }
    if (firstload == 'true') {
        if (!window.location.href.includes('settings?vkify')) {
            location.href='/settings?vkify';
        }
    }
    if (!(enable_setts)) {
        localStorage.setItem('enable_vkify_settings', 'true')
        location.reload();
    }
    if (!(enable_vk2012)) {
        localStorage.setItem('vk2012', 'true');
        const enable_vk2012 = 'true';
    }
    if (!(vk2012_header_type)) {
        localStorage.setItem('vk2012_header_type', 1);
        const vk2012_header_type = 1;
    }
    if (!(realvkify)) {
        localStorage.setItem('realvkify', 0);
    }
    if (!(enablefartscroll)) {
        localStorage.setItem('enablefartscroll', 0);
    }
    if (!(enablevkemoji)) {
        localStorage.setItem('enablevkemoji', 'true');
        const enablevkemoji = 'true';
    }
    if (!(proxyvkemoji)) {
        localStorage.setItem('proxyvkemoji', 'true');
        const proxyvkemoji = 'true';
    }
    if (!(flatplayerbtns)) {
        localStorage.setItem('flatplayerbtns', 'false');
        const flatplayerbtns = 'true';
    }
    if (!(customheader)) {
        localStorage.setItem('customheader', '');
        const customheader = '';
    }
    if (!(adm_ava)) {
        localStorage.setItem('adm_ava', 1);
        const adm_ava = 1;
    }
    if (!(adm_ava_repl)) {
        localStorage.setItem('adm_ava_repl', 'true');
        const adm_ava_repl = 'true';
    }
    if (!(gifsautoplay)) {
        localStorage.setItem('gifsautoplay', 'true');
        const gifsautoplay = 'true';
    }
    if (!(faviconrepl)) {
        localStorage.setItem('faviconrepl', 'true');
        const faviconrepl = 'true';
    }
    if (!(faviconreplt)) {
        localStorage.setItem('faviconreplt', 3);
        const faviconreplt = 4;
    }
    if (!(profilebg)) {
        localStorage.setItem('profilebg', 'true');
        const profilebg = 'true';
    }
    if (!(vkgraffiti)) {
        localStorage.setItem('vkgraffiti', 'true');
        const profilebg = 'vkgraffiti';
    }
    if (!(team_ava)) {
        localStorage.setItem('team_ava', 1);
        const team_ava = 1;
    }
    if (!(team_ava_repl)) {
        localStorage.setItem('team_ava_repl', 'true');
        const team_ava_repl = 'true';
    }
    if (!(enable_scrobble)) {
        localStorage.setItem('enable_scrobble', 'false');
        const enable_scrobble = 'false';
    }
    if (!(lastfm_token)) {
        localStorage.setItem('LASTFM_TOKEN', '');
        const lastfm_token = '';
    }
    if (!(ignored_names)) {
        localStorage.setItem('ignored_names', '');
        const ignored_names = '';
    }
    if (!(ignored_artists)) {
        localStorage.setItem('ignored_artists', '');
        const ignored_artists = '';
    }
    if (!(ignored_tracks)) {
        localStorage.setItem('ignored_tracks', '');
        const ignored_tracks = '';
    }
    if (!(gifts_enabled)) {
        localStorage.setItem('gifts_enabled', 'true');
        const gifts_enabled = 'true';
    }
    if (!(starlike)) {
        localStorage.setItem('starlike', 'false');
    }
    if (!(onlinea)) {
        localStorage.setItem('onlinea', 'true');
    }
    if (!(onlinefr)) {
        localStorage.setItem('onlinefr', 'false');
    }
    if (!(newabout)) {
        localStorage.setItem('newabout', 'true');
    }
    if (!(ajplayere)) {
        localStorage.setItem('ajplayere', 'true');
    }
    if (!(ajplayerm)) {
        localStorage.setItem('ajplayerm', 'true');
    }
    if (!(ajplayerstat)) {
        localStorage.setItem('ajplayerstat', 'true');
    }
    if (!(flatbuttons)) {
        localStorage.setItem('flatbuttons', 'false');
    }
    if (proxyvkemoji == 'true') {
        var vkemojiserver = 'https://koke228.ru/vkemoji';
    } else {
        /*var vkemojiserver = 'https://vk.com/images/emoji';*/
        var vkemojiserver = 'https://vk.com/emoji/e'
        }
    if (enable_setts == 'true') {
        var vkifysett = `<a href="/settings?vkify" target="_blank" class="link">${localization.vkifysettingsfooter}</a>`;
    } else {
        var vkifysett = '';
    }

    function unlockProcessing() {
        $(document).off("click", ".audioEmbed.processed .playerButton");
        $(document).on("click", ".audioEmbed.processed .playerButton", (e) => {
            const msg = new CMessageBox({
                title: 'VKify',
                body: `Кажется, вы кликнули на трек, который всё ещё обрабатывается. Так как OpenVK ещё глупенький, некоторые треки после успешной обработки не меняют своё состояние. Вы действительно хотите воспроизвести его?`,
                unique_name: 'processing_notify',
                buttons: [tr('yes'), tr('no')],
                callbacks: [() => {e.target.closest('.audioEmbed.processed').classList.remove('processed'); e.target.querySelector('.playIcon').click()}, Function.noop]
            })
        });
    }

    async function loadMoreAudio() {
        if (window.musHtml) {
            window.musHtml.querySelector('.audiosContainer .loadMore').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==" />`;
            await window.player.loadContext(Number(Math.max(...window.player.context["playedPages"])) + 1, true);
            window.player.dump();
            let parsedaud = parseAudio(true).scrollContainer;
            let tmp = document.createElement('div');
            tmp.innerHTML = parsedaud;
            window.musHtml.querySelectorAll('.scroll_container .scroll_node [data-realid]').forEach(scrollNode => {
                const realId = scrollNode.getAttribute('data-realid');
                tmp.querySelectorAll('.scroll_node [data-realid]').forEach(node => {
                    if (node.getAttribute('data-realid') === realId) node.closest('.scroll_node').remove();
                });
            });
            parsedaud = tmp.innerHTML;
            window.musHtml.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer .loadMore_node').outerHTML = parsedaud;
            window.musHtml.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();}
            u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
            u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying');
        }
    }

    function cleanUpAudioList() {
        let ldump = localStorage.getItem('audio.lastDump');
        if (ldump) {
            let data = JSON.parse(ldump);
            if (data.tracks && data.tracks.length > 20) {
                data.tracks = data.tracks.slice(-20);
                localStorage.setItem('audio.lastDump', JSON.stringify(data));
                console.log('playlist context cleaned up!');
            }
        }
    }

    function parseAudio(onlyscnodes = false) {
        cleanUpAudioList();
        const audioDump = localStorage.getItem('audio.lastDump');
        const nothingtemplate = `<div class="vkifytracksplaceholder" style=""><center style="background: white;border: #DEDEDE solid 1px;font-size: 11px;margin-top: 9px;margin-bottom: 3px;height: 362px;width: 430px;">
                                    <span style="color: #707070;margin: 172px 0;display: block;">
                                        ${tr('no_data_description')}
                                    </span>
                                </center></div>`
        if (audioDump) {
            try {
                if (JSON.parse(audioDump)) {
                let adump = JSON.parse(audioDump);
                adump.tracks = Array.from(new Map(adump.tracks.map(track => [track.id, track])).values());
                const scrollContainer = document.createElement('div');
                scrollContainer.classList.add('scroll_container');
                adump.tracks.forEach(track => {
                    const scrollNode = document.createElement('div');
                    scrollNode.classList.add('scroll_node');
                    scrollNode.innerHTML = `
					<div id="audioEmbed-${track.id}" data-realid="${track.id}" data-name="${track.performer} — ${track.name}" data-genre="Other" data-length="${track.length}" data-keys='${JSON.stringify(track.keys)}' data-url="${track.url}" class="audioEmbed ctx_place">
						<audio class="audio"></audio>
						<div id="miniplayer" class="audioEntry">
							<div class="audioEntryWrapper" draggable="true">
								<div class="playerButton">
									<div class="playIcon"></div>
								</div>
								<div class="status">
									<div class="mediaInfo noOverflow">
										<div class="info">
											<strong class="performer">
												<a draggable="false" href="/search?section=audios&amp;order=listens&amp;only_performers=on&amp;q=${encodeURIComponent(track.performer)}">${track.performer}</a>
											</strong>
											—
											<span draggable="false" class="title">${track.name}</span>
										</div>
									</div>
								</div>
								<div class="mini_timer">
									<span class="nobold hideOnHover" data-unformatted="${track.length}">${formatTime(track.length)}</span>
									<div class="buttons">
										<div class="report-icon musicIcon" data-id="6690"></div>
										<div class="remove-icon musicIcon" data-id="${track.id}"></div>
										<div class="add-icon-group musicIcon hidden" data-id="${track.id}"></div>
									</div>
								</div>
							</div>
							<div class="subTracks" draggable="false">
								<div class="lengthTrackWrapper">
									<div class="track lengthTrack">
										<div class="selectableTrack">
											<div class="selectableTrackLoadProgress">
												<div class="load_bar"></div>
											</div>
											<div class="selectableTrackSlider">
												<div class="slider"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="volumeTrackWrapper">
									<div class="track volumeTrack">
										<div class="selectableTrack">
											<div class="selectableTrackSlider">
												<div class="slider"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				`;
                    scrollContainer.appendChild(scrollNode);
                });
                if (scrollContainer.innerHTML) {
                const loadmore = document.createElement('div');
                loadmore.classList.add('scroll_node');
                loadmore.classList.add('loadMore_node');
                loadmore.innerHTML = `<a class="loadMore">${localization.vkifyloadmore}</a>`
                scrollContainer.appendChild(loadmore);
                if (onlyscnodes) {
                    return {'scrollContainer': `${scrollContainer.innerHTML}`, 'nowPlayingUrl': adump.context.object.url};
                } else {
                    return {'scrollContainer': `<div class="audiosContainer audiosSideContainer audiosPaddingContainer">
                            <div class="scroll_container">
                                ${scrollContainer.innerHTML}
                            </div>
                        </div>`, 'nowPlayingUrl': adump.context.object.url};
                }
                } else {
                return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
                }
              }
            } catch (error) {
                console.error(error)
                return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
            }
        } else {
            return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
        return {'scrollContainer': nothingtemplate, 'nowPlayingUrl': ''}
    }

    var LASTFM_API_KEY = '22ca1fb2d2dbdb6a67c2bf9b3f28a03c'; //да это токены вкифу и что
    var LASTFM_API_SECRET = 'aad4d21cadb5b4fad160b16e3f956e92';

    const lfauth = {
        getApiSignature: function(params) {
            const keys = Object.keys(params);
            let string = '';

            keys.sort();
            keys.forEach(function(key) {
                if (key !== 'format' && key !== 'callback') {
                    string += key + params[key];
                }
            });

            string += LASTFM_API_SECRET;

            return hex_md5(string);
        }
    };

    function strToSet(input) {
        return new Set(input.split(/\s*,\s*/)); /* вот такие пироги */
    }

    //воруем токен
    async function getLFToken() {
        const url = `https://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${LASTFM_API_KEY}&format=json`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.token) {
            return data.token;
        } else {
            throw new Error('Failed to get token: ' + data.message);
        }
    }

    //дипсик чёта сделал я хз
    function authorizeLF(token) {
        const authUrl = `https://www.last.fm/api/auth/?api_key=${LASTFM_API_KEY}&token=${token}`;
        window.open(authUrl, '_blank');
    }
   const bindajtip = function(mushtml) {
    tippy.delegate("body", {target: '#aj_player_track',
       content: mushtml,
       allowHTML: true,
       trigger: 'click',
       interactive: true,
       placement: 'left',
       theme: 'musicpopup',
       arrow: true,
       getReferenceClientRect: () => document.querySelector('#ajax_audio_player').getBoundingClientRect(),
       maxWidth: 627,
       width: 627,
       offset: [220, 19],
       appendTo: document.body,
       popperOptions: {
           strategy: 'fixed'
       },
       onHidden(instance) {
           window.musHtml = undefined;
       },
       async onMount(instance) {
        window.musHtml = instance.popper;
        const style = document.createElement("style");
        style.id = "fullajplayerstyles";
        style.textContent = `
                #ajax_audio_player {
                    background-color: #66819e !important;
                    opacity: 1 !important;
                }
                #aj_player_track_name * {
                    color: #FFF !important;
                }
                #ajax_audio_player #aj_player_play #aj_player_play_btn.paused {
                  background-position: -203px -28px !important;
                }
                #ajax_audio_player #aj_player_play #aj_player_play_btn {
                  background-position: -183px -28px !important;
                }
                #ajax_audio_player #aj_player_close_btn {
                  filter: brightness(100);
                }
            `;
        document.head.appendChild(style);
           instance.popperInstance.update()
           const placeholder = instance.popper.querySelector('.vkifytracksplaceholder') || instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
           let playingNowLnk
           if (placeholder) {
               const parsedAudio = parseAudio();
               const trackList = `${parsedAudio.scrollContainer}`;
               placeholder.outerHTML = trackList;
               playingNowLnk = parsedAudio.nowPlayingUrl.replace(/^\//, '');
               if (instance.popper.querySelector('.loadMore')) {
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==">`;
                   instance.popper.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();};
               }
           }
           u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
           u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying');
           window.player.__updateFace();
           window.player.audioPlayer.onvolumechange();
           const acont = instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
           const aplaying = acont?.querySelector('.audioEntry.nowPlaying');
           if (acont && aplaying) {
               const aplayingRect = aplaying.getBoundingClientRect();
               const acontRect = acont.getBoundingClientRect();
               acont.scrollTo({
                   top: aplayingRect.top - acontRect.top + acont.scrollTop - (acont.clientHeight / 2) + (aplayingRect.height / 2),
                   behavior: 'smooth'
               });
           }
           if (/^(playlist\d+_\d+|audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
               if (/^(audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
                   try {
                       let plName = (await window.OVKAPI.call("users.get", {"user_ids": Number(playingNowLnk.match(/[^\d]*(\d+)/)[1]), "fields": "first_name"}))[0].first_name;
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${localization.vkifycurrentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('audios')} <b>${escapeHtml(plName)}</b></a>`
                   } catch(error)
                   {
                       console.error('failed to load playing now', error)
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
                   }
               } if (/^(playlist\d+_\d+)(\?.*)?$/.test(playingNowLnk)) {
                   try {
                       let plName = (await window.OVKAPI.call("audio.getAlbums", {"owner_id": Number(playingNowLnk.match(/_(\d+)$/)[0])})).items.find(item => item.id === Number(playingNowLnk.match(/_(\d+)$/)[1])).title;
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${localization.vkifycurrentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('playlist')} <b>${escapeHtml(plName)}</b></a>`
                   } catch(error)
                   {
                       console.error('failed to load playing now', error)
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
                   }
               }
           } else {
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
           }
       },
       onHide(instance) {
           document.querySelector("#fullajplayerstyles").remove()
       }
        });
   };

    async function getSessionKey(token) {
        const params = {
            method: 'auth.getSession',
            api_key: LASTFM_API_KEY,
            token: token,
            format: 'json'
        };

        const signature = lfauth.getApiSignature(params);
        params.api_sig = signature;

        const queryString = new URLSearchParams(params).toString();
        const url = `https://ws.audioscrobbler.com/2.0/?${queryString}`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.session && data.session.key) {
            return data.session.key;
        } else {
            throw new Error('Failed to get session key: ' + data.message);
        }
    }

    async function authenticateLF() {
        try {
            const token = await getLFToken();

            authorizeLF(token);
            alert(localization.vkifylflogin);

            const newSessionKey = await getSessionKey(token);
            localStorage.setItem('LASTFM_TOKEN', newSessionKey);
            lastfm_token = newSessionKey;
            alert(localization.vkifylfloginsucc);
            location.reload();
        } catch (error) {
            console.error('Authentication failed:', error);
            alert(localization.vkifylfloginerr);
        }
    }
    window.authenticateLF = authenticateLF;
    async function scrobbleTrack(trackName, performer) {
        if (!lastfm_token) {
            console.error('Session key is missing. Please authenticate first.');
            return;
        }

        const method = 'track.scrobble';
        const timestamp = Math.floor(Date.now() / 1000);

        const params = {
            method: method,
            api_key: LASTFM_API_KEY,
            sk: lastfm_token,
            artist: performer,
            track: trackName,
            timestamp: timestamp,
            format: 'json'
        };

        //у меня жопа сгорела с этого, ненавижу, пришлось адаптировать https://github.com/fxb/javascript-last.fm-api
        const signature = lfauth.getApiSignature(params);
        params.api_sig = signature;

        const formData = new URLSearchParams();
        for (const key in params) {
            formData.append(key, params[key]);
        }

        // Отправляем запрос на Last.fm
        const response = await fetch('https://ws.audioscrobbler.com/2.0/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        const data = await response.json();
        if (data.error) {
            console.error('Last.fm Error:', data.message);
        } else {
            console.log('Track scrobbled successfully:', data);
        }
    }
const unbigsearch = function () {
if(u('.page_header').hasClass('search_expanded_at_all')) {
    u('.page_header').removeClass('search_expanded_at_all').removeClass('search_expanded')
} else {
    u('.page_header').removeClass('search_expanded')
}}
var scrobbleTimeout;
    async function scrobbleCurrentTrack() {
        if (player && player.currentTrack) {
            const trackName = player.currentTrack.name;
            const performer = player.currentTrack.performer;
            const trackid = window.player.current_track_id;
            if (trackName && performer) {
                if (!strToSet(ignored_names).has(trackName) && !strToSet(ignored_artists).has(performer) && !strToSet(ignored_tracks).has(String(trackid)))
                clearTimeout(scrobbleTimeout);
                scrobbleTimeout = setTimeout(async () => {
                    await scrobbleTrack(trackName, performer);
                    console.log(`waited ${(player.currentTrack.length/2)*1000} mseconds!`);
                    }, (player.currentTrack.length/2)*1000);
            } else {
                console.error('Track name or performer is missing');
            }
        } else {
            console.error('Player or currentTrack is not defined');
        }
    }
    if (enablefartscroll == 'true') {
        /* возвращаем fartscroll в опэнвэка */
        const fartscrollscr = document.createElement('script');
        fartscrollscr.src = 'https://unpkg.com/fartscroll@1.0.0/fartscroll.js';
        fartscrollscr.onload = function() {
            fartscroll(400);
        };
        document.head.appendChild(fartscrollscr);
    }
    var popupimg = "data:image/png;base64,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"
    const vk2012header2 = document.createElement('style');
    vk2012header2.type = 'text/css';
    vk2012header2.innerHTML = `
    .page_header, .home_button {
     background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header1 = document.createElement('style');
    vk2012header1.type = 'text/css';
    vk2012header1.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header3 = document.createElement('style');
    vk2012header3.type = 'text/css';
    vk2012header3.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxcAAAAtCAYAAADcKZZqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAnxSURBVHhe7d17jJTVGcfx553bzuwFdhewtgtagaLWWLWFShNpagUEWmhCQ/+wtRGKiLZRsPWSpjettiIqUIj0khoSkaYSqxW8RLAlpYlYaYtR24oiBeW6y7KX2bm/79vznHl3YVej+4I75fL94JOZOefMuxP/Or+cc97XuXz2Xb5bcgVlxWIheAcAAACgv5KplDhXzP4p4eIonjjBOwAAAAD9FY1Fy+FCnFjQBMIFAAAAcAz8UjlcOPFk0ALCBQAAABCeX8yVw0UkngqaQLgAAAAAwvOK2SBcJKqDJhAuAAAAgPC8QsaEizl3sXJxFJ9wAQAAAITm6srFRA0XrFz0IFwAAAAA4bm6ckG46M13CBcAAABAWG4+CBexqpqgqTI83w/elUVOoAk9Zy4AAACA8Er5LhMuvnV3RcOF6/ly9ZfGy9VfHm8/P7x+izz81BaJRk6MST3bogAAAIDwiiZcRJxKrhr4vvnPhAsTLLLZrC19r23aBwAAAODkpLnCmTT3Z34sUZmVCxMtpOR6suGXCyWTydi26upqmTR/icSiETE/x7b9P3HmAgAAAAhPVy5suEgka4OmgeV5vhRtuFjQJ1wslbgJF5ETYGsUZy4AAACA8Aq5tETETKZ1Qh2mTD7oVf0d837nGbTvPb/r977uQJf+/6AoiqIoiqIoKnw5k+b+3K8KsXJR8nz54rgxMuMLF8mYsz8ijzz9N1tOxJGo6XdN+WbM16d91tb2XQfkyU0vy59e2l7+vuvKcytvsuctVCqVksnXL5NYVL9dducN02XsJ8+Wwx0ZufNX6+X1XQclVqFVDY9tUQAAAEBo+WxanMlz7wmxLcq34WLpLbNk9IgzpFDISzwel3tXPSd/ffktEy4cEy58ueyikXLrNZOlWCzagx279rfJgsVr7RU8z5NnH7yxV7i48oZlEo2Uw8UD3zPXHj7EfjdqAsfru5rltmWPm3ARsf0DzT9B7loFAAAAnEzyGbstytAJdT/KtcsdYlcscrmsDQqu68pF546wN3uyqxbmVT9re3e/jrdM0ChvPdJx5TtH2ffmZ5jM0hMsCoWC7YuYQLFr/2H7Pes9ftOHXfaUO0VRFEVRFEVRoao8Xbdv+ld64FrDwfrNr9pVBQ0ApVJJJnz6E6b/iEvOG2HbtV/H6Xj9nv6t7gfmdYcLHXf5uDF2NWRUU6Pk83nbrisiumrxi9/9ufxjdfJ/1G8ZsNK/RVEURVEURVFUqLIh48prF/nxmkFmYt0Pni+u58n4C8+R26+Z2LO1Se/49IOVT8krb+yRkcOHydLvzpSuri7bp9ue7lm1Uba8stP+Udf15NkV35aOjg7br+EjkUjY1Qpd5VDJZFLeePuQ3Lh4rcRjUVMRcSq0Lao7dQEAAADov1y6w4SLeYv8qurBQdMHcz1XikVX1i6+Vrxizq4yVFVVybrN/5aHnnxB5sz4nEyfcL5dgbArFfGkzLrlNxKP64kMRwol14aLtra24Iq9xWIxOdCWk3l3rbHBImFKVy30KRgVYVdIAAAAAISRTbcHZy5C0ICgKxCbtm63qw662pDL5eSyS0baMxYXn9vUswqh/TpOx9vvBfR5F9rft/T7fiQuj274uw0WsUoHCwAAAADHzJky714/Wdv/lYvyg/BcuXD0x+SOeVOkvb3dttfW1sqLr70jl14wXNLptG1raGiQhfc9Jjv3H5a4CRomOohbcmXd0uulpaXZjulLz1q0drly472PStSECz3UXZkNUWU8oRsAAAAIL9vZHoSLuvqgqR/0ELbnSaHoykM/ukpi/pFVipKTeNfnOXeukUQ8am8l2x1M1i2ZLwcO7A8uKHZbla5a6O1n1aBBg2T3gU65bcUfy7egreSEn3ABAAAAhJbpaBNn6nWL/aow4cLQIFAqufKNqeNk6vjR0tnZadv1vITe/UnV1dXJM1velNXPvGS3N+kKhH6vUHBl/dLrZO/ePXZcfX29vLazWQbXVcvwoTU9ZzG0/e2Dabl9xToTVMyEv0KTfg50AwAAAOH1hItkXUPQ1D+++eeZcDHizAa576YZsm/fvqDniKamJrn27t9LW0dGIiZc6JkL3y+veDz5wDzZvXuXHXfWWWfLpBuW2/crbv2aNA2tltbWVvu5sbFR9rRk5PsPrrdPAD/63MZA0b8DAAAAIJyu9sMmXMy/z68ZFC5c6APvPM81QaEkDyycKUknZ+8O1U23OeX8pNy85HG7JSoSMWXm7HY7VaFkw8WOHW/asaNGjZZpN620Kwa+6V9y81flo41JaW4un8kYNmyYbPnXXvn1Ey9U5PwFZy4AAACA8NImXJTn6jqhDlH6MD3HiUjUhIbN23bYw9w68c9kMvZVP2t71LzXcTpev6f/tE3pHaW0VCyqt5yNSTIRl4VL/iD7WnP2MLheT5+H0XRGvR71KOvzWyiKoiiKoiiKOgFKp+p25WJwo/0Qhmdm+56r25xKMuGSkTLp0vPk4jHDZdv2d2TDi/+Rzf98SxLxmAkORw5k2wPdZvysiRfLVVPG2rY1z26VtRu32XMZ+swMz3UlX3TljvnTZOz5Z0lzW1oWrdoo/93X2utaA2agrw8AAACcgjrbWsWZdv39fvUxhAtLD3abgFEs6XMqPBsOdHtT1IQA+5wKDQPBSoVl+nWcWypJoeTZpkQsItFYzH5Hab8eFtdr6tkOXe2wT+k2QaV7BWQgcaAbAAAACK8nXNQMHhI0haOTfw0MuiKhwaI7XGgdvRXqaHqoW8frnaOUPUcRbLNSek0/6O+5nunXcX2vNRA40A0AAACE13H4UDlc1DYMDZqOjYYB+2r+dQeA95ukd4/v1nds335VsUk/KxcAAABAaB2tLeVwMajx+MLFqYS7RQEAAADhtR8y4WLGd5b5NYPD3Yr2VEa4AAAAAMLRHUyFdKc4s3/4Wz9djEo0Fg26TnOECwAAACAU13WlIeWIs3z1Rn/TtrcknkwFXac3DnQDAAAA4eSzWZk8bow4O94+6C9YtEaO91D3qYJb0QIAAADhtLe2yPLbrxLHN1Y88rw8/48dUl1bG3SfxggXAAAAQL9l0mmZcum5ct2sz5fDhe6R+snKJ+TVnYcklUpJNHr6nr/gQDcAAADwwTRD5LJZufCcIfLj+V+xGcKGi6BfHtu4VVav2yJOIiXJqoQMri/fRaoqXmVfTwuECwAAAKCXfDFvXzvTneKWSlIoFMTNZ+Wb08fLzCs+Y/tUr3Chdu9rkaf/8pq8smOv7N5zMGg9fXgVeAo4AAAAcLL6+PBh8qnRTTJtwgUy4swhQWvZu8IFEEbz4bSpThlaXxO0AAAA4GTU0tYlwxrqTB37OexI8AoAAAAAx4VwgeOSiovEomwlAwAAONnpnE7ndseDcAEAAADgQyDyP3YLLnSOMyfzAAAAAElFTkSuQmCC") !important;
    }`
    const vk2012header4 = document.createElement('style');
    vk2012header4.type = 'text/css';
    vk2012header4.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header5 = document.createElement('style');
    vk2012header5.type = 'text/css';
    vk2012header5.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header6 = document.createElement('style');
    vk2012header6.type = 'text/css';
    vk2012header6.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header7 = document.createElement('style');
    vk2012header7.type = 'text/css';
    vk2012header7.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header8 = document.createElement('style');
    vk2012header8.type = 'text/css';
    vk2012header8.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header9 = document.createElement('style');
    vk2012header9.type = 'text/css';
    vk2012header9.innerHTML = `
    .page_header, .home_button {
    background: url("data:image/png;base64,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") !important;
    }`
    const vk2012header_custom = document.createElement('style');
    vk2012header_custom.type = 'text/css';
    if (customheader === "") {
        vk2012header_custom.innerHTML = vk2012header1.innerHTML;
    } else {
        vk2012header_custom.innerHTML = `
    .page_header, .home_button {
    background: url("${customheader}") !important;
    }`
    }
    const vk2012style = document.createElement('style');
    vk2012style.type = 'text/css';
    vk2012style.innerHTML = `
.header_navigation .link {
  background: none !important;
}

.page_header.search_expanded #search_and_one_more_wrapper {
  position: unset !important;
  margin-left: unset !important;
}

.page_header #search_and_one_more_wrapper {
  left: -68px !important;
  position: relative !important;
  margin-left: unset !important;
}

.page_header .header_navigation #search_box {
  width: 175px !important;
  height: 24px !important;
  float: left;
  position: absolute;
  left: 48%;
  padding: 10px 4px 0 7px !important;
}

.page_header.search_expanded .header_navigation #search_box {
  float: unset !important;
  position: unset !important;
  left: unset !important;
}

input[class="button"] {
  padding: 5px 7px 4px;
  border-top: 1px solid #517295;
  border-bottom: 1px solid #4e6f93;
  border-left: 1px solid #4e6f93;
  border-right: 1px solid #4e6f93;
  padding-top: 5px;
  padding-bottom: 4px;
  text-shadow: 0 1px 0 #45688e;
  max-height: 25px !important;
}


.button {
  border-top: 1px solid #517295;
  border-bottom: 1px solid #4e6f93;
  border-left: 1px solid #4e6f93;
  border-right: 1px solid #4e6f93;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABUCAIAAADMNMqaAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABXSURBVHjapI7BDYAwDANNxmYVZmGxPOKmkKgNqvj0YflaWcrJed0CQEh482nSe+ZPLNkwOP/N6qazJdd9DeImi0t38xyqGp7vZubVe+kdbrubn9tNgAEAaD7UiMhv1xkAAAAASUVORK5CYII=") #6181a6 repeat-x !important;
  background-position: 0px -16px !important;
  border-radius: 2px;
}

.button {
  border-radius: 2px;
  border-top: 1px solid #517295;
  border-bottom: 1px solid #4e6f93;
  border-left: 1px solid #4e6f93;
  border-right: 1px solid #4e6f93;;
  font-size: 11px;
  outline: none;
  white-space: nowrap;
  background: #597da3;
  color: #fff;
  padding: 4px 8px 4px;
  text-shadow: 0 1px 0 #597da3;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 5px !important;
}

.navigation .link {
  display: block;
  padding: 3px 3px 4px 6px;
  text-decoration: none;
  border-top: none;
  color: #285473;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  font-size: 11px;
  text-align: left;
  cursor: pointer;
  background: none;
  margin-bottom: 1px;
  border-radius: 2px;
}

.navigation .link {
    display: block;
    padding: 3px 3px 4px 6px;
    text-decoration: none;
    border-top: none;
    color: #285473;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    background: none;
    margin-bottom: 1px;
    border-radius: 2px;
}

.navigation .link:hover {
    background-color: #e2e8ee;
    border-top: 1px solid #fff !important;
}


.navigation_footer .link {
    padding: 3px 3px 3px 6px;
    text-decoration: none;
    border-top: 1px solid #fff;
    color: #000;
}

.navigation_footer .link:hover {
    background-color: #E4E4E4;
    border-top: 1px solid #CCCCCC;
}

.page_yellowheader {
  padding: 6px 10px 8px !important;
  font-weight: bold !important;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAUCAYAAABMDlehAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVSURBVBhXY3j59uN/JgYgoBXBwAAAd6UD7STEpAsAAAAASUVORK5CYII=") repeat-x !important;
    background-color: rgba(0, 0, 0, 0) !important;
  background-color: #e9edf1 !important;
  border-right: solid 1px #e9edf1 !important;
  border-left: solid 1px #e9edf1 !important;
  border-bottom: solid 1px #e9edf1 !important;
  color: #607387 !important;
  overflow: hidden !important;
}
.page_yellowheader span {
  color: #AAB7C5 !important;
}
.completeness-gauge, .completeness-gauge-gold {
  background-color: #F1F1F1 !important;
  border-top: unset !important;
  height: 18px !important;
}
.completeness-gauge.completeness-gauge-gold span, .completeness-gauge span {
  color: #8BA1BC !important;
}
.completeness-gauge-gold>div, .completeness-gauge>div {
  background-color: #DEE5EB !important;
  height: 18px !important;
}
input[type="text"], input[type="password"], input[type~="text"], input[type~="password"], input[type="email"], input[type="phone"], input[type~="email"], input[type~="phone"], input[type="search"], select {
    border: 1px solid #C3CBD4;
    padding: 3px;
    font-size: 11px;
    font-family: tahoma, verdana, arial, sans-serif;
    height: 26px;
}
input[type~="search"] {
    border: 1px solid #4e729a !important;
    padding: 3px !important;
    font-size: 11px !important;
    font-family: tahoma, verdana, arial, sans-serif !important;
    border-radius: 3px !important;
    background: url("data:image/gif;base64,R0lGODlhCwALAMQTAL/J1dLZ4tHY4bzG09LZ4cLM18/X4NDX4L3I1N3i6c7W397j6cHL19Pa4sTN2M3V377I1ert8brF0v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAALAAsAAAU74CROEVEwQjSSgORKkCoKEiEGkjJC0ioNu97oNzpIAqKG5DFK8F4IVeQhWRgAkIfUsVyNuA6ZNxL2jkIAOw==") no-repeat 3px 4px !important;
    background-color: #fff !important;
    padding-left: 23px !important;

    background-position-y: 6px !important;
    background-position-x: 5px !important;
}
input[type~="search"][name~="query"] {
    width: 169px /* qualified */ !important;
    background: url("data:image/gif;base64,R0lGODlhCwALAMQTAL/J1dLZ4tHY4bzG09LZ4cLM18/X4NDX4L3I1N3i6c7W397j6cHL19Pa4sTN2M3V377I1ert8brF0v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAALAAsAAAU74CROEVEwQjSSgORKkCoKEiEGkjJC0ioNu97oNzpIAqKG5DFK8F4IVeQhWRgAkIfUsVyNuA6ZNxL2jkIAOw==") no-repeat 3px 4px /* qualified */ !important;
    background-color: #fff /* qualified */ !important;
    padding-left: 22px /* qualified */ !important;
    background-position-y: 5px /* qualified */ !important;
    background-position-x: 6px /* qualified */ !important;
    padding-bottom: 5px /* qualified */ !important;
}
.header_navigation #search_box select[name="section"], .header_navigation #search_box .search_box_button {
  border: 1px solid #4e729a !important;
  border-left: 0px !important;
}
.page_yellowheader a {
  color: #2b587a !important;
}

#news b {
  color: #517295 !important;
}

.bigPlayerWrapper span, .bigPlayerWrapper a {
  color: #45688E !important;
}

.bigPlayer .trackInfo a {
  font-weight: bold !important;
  color: #2B597D !important;
}
.audioEntry {
  border-radius: 0px !important;
}
.searchList li, .searchList a, .verticalGrayTabs a {
  border-radius: 1px !important;
}
.audioEntry.nowPlaying:hover {
  border-radius: 2px !important;
}
img.name-checkmark {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAMAAACTbPdTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURbrCzAAAALF4Y9kAAAACdFJOU/8A5bcwSgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAADRJREFUGFdFzQEKADAIAkD9/6c3NcvB6CIQ3AA8QZk5qDL/p0XQnf+eK76vBTUc3LdI+4B8Gk4AVy10OdoAAAAASUVORK5CYII=") !important;
  width: 13px !important;
  height: 11px !important;
  margin-bottom: -1px !important;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-egon.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-vnd.rn-realmedia.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/audio-ac3.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-octet-stream.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-srt.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/draw-brush.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/office-chart-bar-stacked.png"],
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/apps/amarok.png"] {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADcCAYAAABwMoHUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACMdJREFUeNrsW3usFNUZn8fuzO7Ovu7eBe9ifLT/tekjBpO2V9S2ovJGqjWx1tyKUqJcQQXFB7GRQAC9iBJAIOGmpK+0mBBbizb9o6lVqq32H5s2TXxghdbgBfe9e/fuzPj77p1LZuc9s2tEmMmenDmP+c13vu873/eds2dYVVWZXl4c0+Pr7AeM2DUs3/CzHyJ7BilnaKogPTi66ba9Vs+xRqEAiKi+PREX96XTKZ7j2I526l8u19RavbEKxX0AViwBAfQlZHvw+Ox4IpbKZlKOQyuVqky93qjg6X+hOAzgNzqGHInwezKZ1LeFaIRhWdaVV5lMkkmnpdREu/2Ncqm6EVULOgAJTBSivgRALxaiUSaVkuabpOwAtn3TqnksJWKJVQdRFLyrDYDW6e5XdauHaq8Vm4X0R3QqtTuwYk9fkORaAK2dlmzXgEkpMZmCDPl4F1P4HROgLCs3IzsWAOxYW5ZvtZ3LoYENAT9rJ/Xjn/xyM8ez61iGFRg3o63ST20psjqy//EfPGoJKIjR9TzP93OwxDzPFVnOegCqotDMyiqYFHJbPokqa0CA8Qo6q2TaxSgTjVjbDvgRpjXRnvSAfIQXbIdMlAGs6JFdRfIpnMGhGSjkJinTqLVForZ4XJwyKm3ZUcpNJHLIF3qgMKslewrBaOINT4MgCjgbHsqyzDQa41PUGgRnfCJGvPHKQ1c91POQC3l47vJQDsDDli2goirPYMKfxBwVvPAQfSdgcZ50jLFDn3Iuez1EqfOQjSIVfGJ8iLQCC58XOgBjovBsJpsq8Jw/omVFGSgVK0TIzI4hI36+1C/YtLXJZlMzTDx0ckqugtAR4oWki7VVlNITKQPsAy2nIcg9VRuAkhBbPdVDgIpn90zBBKh2tTQzgI0XBvJCVxQCZJaWtwuFGYLb9oErhfCEJwDGzCrM6G7fZvq6YGZ/YKG834VwP7Jajd6F7IMAYCcQRi8Pvd65BAglj3pWbHTehGytFniaLng2mnkl9NuO4mMoq46A6ZS0XpLiEaf5OnBBPl6tNTZUKrULAUzuU7YdspRMRNwmP7WnkgnydLej53MAFW0BWR+8TMRjTF9f+gbgHwpsDzUXwPbSwKp2wgoE6MUmhlMvBOwBYDsAhr1xwDQYcQvXLFavW8O13nm71rO6hh4+eD0y+oNmrq76ZaQtB7cMvWTpc6zUBkC0JjkUiwnLUkmJQX6mbXy8xZQrNabZbB1G8WYAt70M+Tf5/syyGfm+DjC66P8nqqd2OKhfu1II6uaj85F4PObKr0ajyYydKi0Clb+3pRAU3W8A+x/SNzVvd4U+WqV+8Zhwr+OQwbO5hs2hJQB7XXOhRxGtLta3J5PSVY6ARp5tWb3gzY5geqz4906eRgU3oRw38PQ6fbnVmphnCE2OOeqhLMs/x2L8IR3FvwXoStz+CekalPd1GFBZ/oUjhbV6c0RfzvdnRSkR+2mE595HZDaaz/d1xIf1evMJR8CdD914Ctnj+mgrl8swWJYxub60MaB6BP3LropdLlcJ8D0XNfw3pL7Fk3HY+fBNarstz3dCm2i3F/qyNlvXLPwPstU2zXdsW7PoPc/GQX9t2P3Si8j0qnIYQ/1eYHvYbI7fhOy0VjyJ+XtrVwZ2ZO3SGqbbtaTTsqLM277uhoZjDB660c+Z19OWEn9BNkcrvoIlxJVdAcLazBG0QxWwhXO6HrKgO6EheDj68eny0C+/XAG98gsvfhXZoFY8ihdfYQnolV948aDuxYNd89DpxeFcPh8BX9Hdv+pQ95qu7q+hTwkBz2o3Ckt8JnSjHTe73TjjZNC7ig5ANMxHPHgGxMtunNFVcBYUBrbeJkCisKdCCUKhI2BIYUhhSKHZtYZu9PxzUlAZ0sEDjP/TLP+nTQ3o8IsdgDFROBDwNEuhVKwQIbM6huwHTNtLHKZ7eoaeNfHQJxjlu/WggYRi/E9PAw0mZas/CK0iC64bMKvIguslmCugXzA3wCG/YLaARFmxWDkIgB/5AXPcFdn16PfZ4c2HVACNofg7r4dPrChcqgfFlPQMZknh6Y9Lb4GqJbh93mvQaQdIVqPQnpDfpd32XF/GD86HpiHDatxJDTNn5vyCncCzd4Re7/OykjLM20uQrUGifeyLtGo600T/lj0Fp2R5aMpSygDby/PcSvpYKBYTJ09BT6qWrNBGOVOt1en+AEDvdAWknbdsJjmYSMT11dSpw5TV602mWKq8CdDLncK5vbTzZgBTYH1MvE4kYvT/3mw8s98SkHgGylYKPr6Ii0YjTDaTWoFnv2h2ozx3n4EyTxdRGonw95kAIYAlQVVFkuJLTYCwMF+w6T8ttbfsAGOieJFJDx3OwfLgUQLS/Jq+Ur9Qn1Yro2LTX0KWVLIsWwPohL7KYHiPmwBlWX4BVN5jBVgYyNO4bcUPJX/exMNms/W0E+NZQ9JfzfHxHSbAHQ8uexfZ/gBCHt3xwLJ3bKcemH0U2bc8gv0Ds2i2o/lCh0EtNHa7DhjBHH0KKCWJP8JMfbE6S2e+/oC0DWBvezZfoU8JAQO40eWPHSTTvRlpBTP1cerw6MahP6P+K8zU1w1f1pR/PeqbroAwV8+mU9ItMO+72rI8t1yqHgHYd+FDDsOHNGDyd8PrrS5Xqgntpc5DzmSStySk+FOb715IJ06vyuUyY4IQ+SNyieXYq1G/Hi97IpNOLXblISjZHo/H5Fq1fhmVt92zpKQo6l39ueweUH731uHFx9GHrdYal8FtSLh/2nHq3TvynCrB+7VaE8yp06UjFI6AT2/rXkgv2oWgdFAUo5MOf8e6G1lbCin8oMMSdFAHQ1wAfv0TIF/XwL4DPv6NggEKm6kfPJ6rlD/WLcoZMd/HjJ0q7gTY9aDoyVwuW3E6ZtpzaxOxEMobVlE++LgIbfSVzIDJB2wcutwWkAIgi32F/1IOnn4Vq/eLfVFIAZBJt+SpT1PoO1K9Uz93rE3TJ0bTERBq9CvG+7HLltY/9Ho9vD4RYADqcln+kWwFXAAAAABJRU5ErkJggg==") !important;
  max-width: 16px !important;
  max-height: 16px !important;
  width: 16px !important;
  object-fit: none !important;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-egon.png"] {
  object-position: -2px -2px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-vnd.rn-realmedia.png"] {
  object-position: -2px -25px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/audio-ac3.png"] {
  object-position: -2px -47px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-octet-stream.png"] {
  object-position: -2px -69px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-srt.png"] {
  object-position: -2px -135px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/draw-brush.png"] {
  object-position: -2px -157px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/office-chart-bar-stacked.png"] {
  object-position: -2px -113px;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/apps/amarok.png"] {
  object-position: -2px -91px;
  height: 17px !important;
  max-height: 17px !important;
}
img[src*="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/insert-link.png"] {
  content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFbSURBVDhPY/z//z8DuYCRkZEBxYCC7jV2nz5+Pwjl4gTzWmIZQTSGASBQ2Ls2m4udawpIEhdoyfaAG8AEFkEC/cXBU7///D6JWK9hGAACfcVB+X///f0A5eIFWA0o6l3XwczELADl4gUYBuR3r9biYOMoRQ8DkJdgGBlgGMDCzFIJ1MyErAFdEzJAMQBoOwsrC6s3OHqg+N//fz++/fzm8+fvnwcwMWSA7gJRJkYmPiSb///4+SMSGDNbf/z6of/7z+/n6K5BN+AvEP+H2QS09XF/SfAGkMTE0tBPP3/91APGzksQHwZQDAAqegV08nsolwFoI1gzDEwoDXkDTCPaUC4YYATir9+/5kCZIPAHSsMB0JK3UCYYYBgAdHYLEIMTETBA3cCCeACGAZPKwr4BA8zp79+/34GJSRMYM5JQKawAwwAQmFAScv77r+/KQJecAQZmCFQYC2BgAAB/gqYh/QChjAAAAABJRU5ErkJggg==") !important;
  max-width: 16px !important;
  max-height: 16px !important;
  width: 16px !important;
}
.content_title_unexpanded {
	background-image: none !important;
	background-repeat: no-repeat;
	background-color: #eee !important;
	border-top: solid 1px #eee !important;
	padding-top: 3px;
	padding-right: 8px;
	padding-bottom: 3px;
	padding-left: 8px;
	border-bottom: 1px solid #eee !important;
}
.content_title_expanded {
  background: #DEE5EB;
  border-top: 1px solid #DEE5EB !important;
  border-bottom: 1px solid #DEE5EB !important;
  padding: 3px 8px;
  font-weight: bold;
  outline: none;
  color: #45688E;
  background-image: none !important;
}
#news hr {
  background-color: unset !important;
  border: none;
  height: 1px;
}
#votesBalance, #news {
  background-color: unset !important;
}
.content_subtitle {
  background-color: #F1F1F1;
  display: block;
  font-size: 11px;
  border-bottom: 1px solid #F1F1F1;
  color: #666;
  padding: 3px 8px;
  border-top: 1px solid #F1F1F1 !important;
}
.page_header .friends_online {
  background-repeat: no-repeat;
  background-image: url("data:image/gif;base64,R0lGODlhCQAKAMQTAL3K2ePo7p6xxr3K2PL099jg6Nvi6s/Z46a3y+jt8uPp79/l7KCyx+vv86y8zsLO3Ozw9Ki5zImguv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAAJAAoAAAUp4DQZDiMNoiitayIS7LqIQSwdYmEDKcIKqUmDpUhBIqwIZPKwrZrOVQgAOw==");
  background-position: 26px 5px;
  width: 23px;
  font-weight: bold;
  color: #89a0ba;
  font-size: 10px;
  text-align: right;
  padding-right: 17px;
}
.page_header.search_expanded .friends_online {
  display: none;
}
.page_header.search_expanded .friendslink {
  display: none;
}
#ajloader {
  background-color: #000 !important;
  opacity: 0.7 !important;
  filter: alpha(opacity=70) !important;
  height: 37.5px !important;
  -webkit-border-radius: 5px !important;
  -khtml-border-radius: 5px !important;
  -moz-border-radius: 5px !important;
  border-radius: 5px !important;
  -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35) !important;
  -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35) !important;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35) !important;
  width: 100px !important;
}
#ajloader img {
  top: 15% !important;
  position: relative !important;
  content: url('data:image/gif;base64,R0lGODlhQAAQAJkCAJ6ens3Nzf///AAAACH5BAUKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAQAAQAKAAAAD///wCMYSPqcvtD6OctNqLs16h+w8G2wiEpkdu55lqq9lmbxhjM1hf95dbO9oLCofEovG4KQAAIfkEBQoAAgAsBAAEACQACACh/v//zc3NAAAAAAAAAiOMjxnCAg+jBKqe5qZ+1uK9ddUHTqJCltGZpCrHXs27xob7FgAh+QQFCgADACwEAAQAOAAIAKGenp7+///Nzc0AAAACOoSPCcMjD6MUbYSLsw6qnzqFULWVmOeBYkiaJdqpq9S6GqzI89jYG57Q7Sg9XwaIEO5qRg7SoJwxjQUAIfkEBQoAAgAsGAAEACQACAChnp6ezc3NAAAAAAAAAiOEjwnCEg+jDKqe5qZ+1uK9ddUHTqJCltGZpCrHXs27xob7FgAh+QQJHgAAACwAAAAAQAAQAKAAAACenp4CMISPqcvtD6OctNqLs948+A+GAdeJpkdu55lqq9lmrxhjc1hfN5hb+9cLCofEolFTAAA7') !important;
}
.repost-icon {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURc7Z5qe+1XmdweDn78nY5gAAAEbyxbkAAAAGdFJOU///////ALO/pL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA2SURBVBhXVY1JDgAwCAJdyv+/XEKobedgJlEwcIgcjyp7Z9EXh+Fq+Py9ARhzVm23U+5fKQc2Yh0BdnHXyQ4AAAAASUVORK5CYII=') no-repeat 0 0 !important;
  height: 11px;
  margin: 1px 5px 0 !important;
  width: 11px;
}
.page_header.search_expanded_at_all.search_expanded select[name="section"] {
  display: none !important;
}
.page_content .comment::not(.page_content.overscrolled .comment) {
  padding: 5px 0 0;
  border-top: 1px #ddd solid;
  width: 323px !important;
}
.navigation .link.edit-button:hover {
  background: #E1E7ED !important;
  text-decoration: none;
  -webkit-border-radius: 2px;
  -khtml-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  color: #67829e !important;
}
.ovk-diag-cont {
  background-color: unset !important;
}
.ovk-diag {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35) !important;
  border: unset !important;
}
.ovk-diag-head {
  background-color: #597DA3 !important;
  border: 1px solid #45688e !important;
}
.ovk-diag-body {
  padding: 0px;
  border: 1px solid #999;
  border-bottom: none;
  border-top: none;
}
.ovk-diag-action {
  border: 1px solid #999 !important;
  background-color: #F2F2F2 !important;
  border-top: 1px solid #DAE1E8 !important;
}
body.dimmed > .dimmer {
  background-color: #b7b7b7 !important;
  opacity: 0.7 !important;
}
.repeatButton.musicIcon {
  background-position: unset !important;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACSSURBVChTY/j//z9BHFA0CUgh+EwMRILA4sn/oUwGRqApPkB6NhBLgEUIgPW9uYwgmxYAMVEaYIAFiIUhTAZboClHoGwUAHMayBYQDfcTLg0wANMAMoCogEDWAKKJDj1kANaEbhIhwESsBqC8NZTJwAiKYWJtgIJHpPrpORCng20CAZhtMOfiA8jxRFAxBDAwAADevVg6HNHJRgAAAABJRU5ErkJggg==") !important;
}
.additionalButtons .musicIcon {
  filter: unset;
  transition: opacity 100ms ease-out !important;
  opacity: 0.70;
}
.additionalButtons .repeatButton.musicIcon.pressed {
  opacity: 1;
}
.additionalButtons .deviceButton.musicIcon.pressed {
  opacity: 1;
}
#act_tab_a {
  padding: 5px 10px;
  margin: -5px -10px;
}
.tab a#ki {
  padding: 5px 10px;
  margin: -5px -10px;
}
.tabs {
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  -moz-user-select: none;
}
#ajax_audio_player {
  color: #66819e !important;
  background-color: #d9e0e8 !important;
  opacity: 0.70;
  transition: opacity 200ms ease-out, background-color 200ms ease-out, top 150ms ease-out, left 150ms ease-out, bottom 150ms ease-out, right 150ms ease-out !important;
  border-radius: 3px !important;
  -moz-border-radius: 3px !important;
  -webkit-border-radius: 3px !important;
  -khtml-border-radius: 3px !important;
}
#aj_player_track_name * {
  color: #66819e !important;
}
.ui-draggable-dragging #aj_player_track_name * {
  color: #567392 !important;
}
#ajax_audio_player.ui-draggable-dragging {
  opacity: 1;
}
#ajax_audio_player:hover {
  opacity: 1;
}
#ajax_audio_player #aj_player_play #aj_player_play_btn.paused {
  background-position: -243px -28px !important;
}
#ajax_audio_player #aj_player_play #aj_player_play_btn {
  background-position: -222px -28px !important;
}
#ajax_audio_player #aj_player_close_btn {
  transition: opacity 200ms ease-out;
}
.header_navigation .link > a {
  color: #dae1e8;
  text-decoration: none;
  font-weight: bold;
  padding: 15px 3px;
  margin: -15px 0px;
}
.header_navigation .link > a:hover {
  text-decoration: none !important;
}
.header_navigation .link:hover:not(.link.header_divider_stick) {
  background-color: rgba(0, 31, 64, 0.17) !important;
}
.header_navigation .link {
  height: 30px !important;
}
.page_header #search_box input[type="search"] {
  height: 24px !important;
}
.header_navigation #search_box select[name="section"] {
  height: 22px !important;
}
#profile_link, .profile_link {
  padding: 4px !important;
  border: none;
  border-bottom: unset !important;
  color: #2b587a;
}
input[class="button"]:active {
  background: #5D81A7 !important;
}
.button {
  padding: 5px 7px 4px !important;
  border-top: 1px solid #517295 !important;
  border-bottom: 1px solid #4e6f93 !important;
  border-left: 1px solid #4e6f93 !important;
  border-right: 1px solid #4e6f93 !important;
  padding-top: 5px !important;
  padding-bottom: 4px !important;
  text-shadow: 0 1px 0 #45688e !important;
  max-height: 25px !important;
}
.avatarDelete {
  background: rgba(0, 0, 0) !important;
  -webkit-transition: opacity 100ms linear;
  -moz-transition: opacity 100ms linear;
  -o-transition: opacity 100ms linear;
  transition: opacity 100ms linear;
  border-radius: 2px !important;
  width: 15px !important;
  height: 15px !important;
  padding: unset !important;
  opacity: 0;
}
div.avatar_block:hover .avatarDelete, div.avatar_block:hover .avatarDelete::before {
  opacity: 0.5 !important;
}
div.avatar_block .avatarDelete:hover::before {
  opacity: 1 !important;
}
.avatarDelete::before {
  content: ' ';
  background: url('data:image/gif;base64,R0lGODlhBwAHAIABAP///////yH5BAEAAAEALAAAAAAHAAcAAAIMBIKmsWrIXnLxuDMLADs=') !important;
  background-repeat: no-repeat;
  display: inline-block;
  width: 7px !important;
  height: 7px !important;
  margin-top: 1px !important;
  margin-left: 4px !important;
  opacity: 0.5 !important;
}
.button:active {
  background: #5e80a5 !important;
}
.header_navigation #search_box #searchBoxFastTips {
  display: none;
  position: absolute;
  background: #fff;
  border: 1px solid #d8d8d8;
  border-top: unset;
  margin-top: -2px;
  box-shadow: 2px 3px 4px -1px rgba(34, 60, 80, 0.2);
  margin-left: -239px;
  width: 151px;
  padding: 10px;
  border-radius: 0px !important;
}
.button:hover {
  color: #fff !important;
  text-decoration: none;
  background-position: 0px -8px !important;
}
.bigPlayer .slider, .audioEmbed .track .slider {
  z-index: 1;
}
.selectableTrack .selectableTrackLoadProgress {
  top: -15px !important;
  z-index: 0 !important;
}
.selectableTrack .selectableTrackLoadProgress .load_bar {
  background: #bac7d4 !important;
  border-bottom: none !important;
  height: 4px;
}
.audioEmbed .track > .selectableTrack, .bigPlayer .selectableTrack {
  background: #d8dee4 !important;
}
.page_body .selectableTrack .selectableTrackLoadProgress {
  top: -13px !important;
  z-index: 0 !important;
}
`;
    const vk2012flat_btns = document.createElement('style');
    vk2012flat_btns.type = 'text/css';
    vk2012flat_btns.innerHTML = `
.audioStatus::before,
.headerMusicBtn {
	background-image: url("data:image/png;base64,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") !important;
}
`
if (flatbuttons == 'true') {
    const flat_btns = document.createElement('style');
    flat_btns.type = 'text/css';
    flat_btns.innerHTML = `
.button {
  border: 1px solid #6383a8 !important;
  background: #6383a8 !important;
  transition: background-color 100ms ease-in-out !important;
  text-shadow: none !important;
}
input[class="button"]:hover,
.button:hover {
  background: #6d8cb0 !important;
  border: 1px solid #6d8cb0 !important;
}
input[class="button"]:active,
.button:active {
  background: #5c7ca1 !important;
  border: 1px solid #5c7ca1 !important;
}
`
    document.querySelector('html').appendChild(flat_btns);
}
const admava1 = document.createElement('style');
    admava1.type = 'text/css';
    admava1.innerHTML = `
img[src*="https://kaslana.ovk.to/hentai/6f/6f9e45a01303bd921f9bdc6245a5270eea13c8c1122a4baaee483e9e20b2c164179e2594822f32d6a20b26d50d47bb498bd33b9be709b35ee4f616d31f398941_cropped/"] {
content: url("data:image/png;base64,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") !important;
}`
    const admava2 = document.createElement('style');
    admava2.type = 'text/css';
    admava2.innerHTML = `
img[src*="https://kaslana.ovk.to/hentai/6f/6f9e45a01303bd921f9bdc6245a5270eea13c8c1122a4baaee483e9e20b2c164179e2594822f32d6a20b26d50d47bb498bd33b9be709b35ee4f616d31f398941_cropped/"] {
content: url("data:image/png;base64,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") !important;
}`
    const teamava1 = document.createElement('style');
    teamava1.type = 'text/css';
    teamava1.innerHTML = `
img[src*="https://kaslana.ovk.to/hentai/91/91e3d274dcd5c300cbbc8910efb3b518a666f66759cf731116db85ce5ccb6f700a234df72cff76636f6cfc45fbc873b044f4039696dd26e8e49795a94efad2eb_cropped/"] {
content: url("data:image/jpeg;base64,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") !important;
}
img[src*="https://kaslana.ovk.to/hentai/91/91e3d274dcd5c300cbbc8910efb3b518a666f66759cf731116db85ce5ccb6f700a234df72cff76636f6cfc45fbc873b044f4039696dd26e8e49795a94efad2eb_cropped/miniscule.gif"] {
content: url("data:image/jpeg;base64,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") !important;
}`
const teamava2 = document.createElement('style');
    teamava2.type = 'text/css';
    teamava2.innerHTML = `
img[src*="https://kaslana.ovk.to/hentai/91/91e3d274dcd5c300cbbc8910efb3b518a666f66759cf731116db85ce5ccb6f700a234df72cff76636f6cfc45fbc873b044f4039696dd26e8e49795a94efad2eb_cropped/"] {
content: url("data:image/jpeg;base64,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") !important;
}
img[src*="https://kaslana.ovk.to/hentai/91/91e3d274dcd5c300cbbc8910efb3b518a666f66759cf731116db85ce5ccb6f700a234df72cff76636f6cfc45fbc873b044f4039696dd26e8e49795a94efad2eb_cropped/miniscule.gif"] {
content: url("data:image/jpeg;base64,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") !important;
}`
    if (starlike == 'true') {
    const likestarst = document.createElement('style');
    likestarst.type = 'text/css';
    likestarst.innerHTML = `
.heart {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADOSURBVChTY/j//z8Gblt0JBubOCOIQAbti4/KAKm7QKxQGWv9HCwIBUxQGhnEAzEbEMeCeUgARTHQVEYglQjhMSRAaThgBLpvCpDOhnBxApBbJ4DdDDQxFMiZBcQCIBk08BaIk4Du3wT3IFCDEpC6BcTMYAEI+AXEqkCFj0AcZDdzAzGyQhAAeZQLwkRV7ACl/wDxciD+C+YxMDhDaRTFjkD8CohdgdZGAWk3IH4NxE5ADAZgxUD3gmhOIDYGKjwAEgPS+4CUEUgcIs/AAACNB1G2TDDVFQAAAABJRU5ErkJggg==') no-repeat 1px 0 !important;
  height: 11px !important;
  width: 11px !important;
  opacity: 0.4;
}`
    document.head.appendChild(likestarst);
}
    var copydate = '2006-2007';
    if (profilebg != 'true') {
        const prbg = document.createElement('style');
        prbg.type = 'text/css';
        prbg.innerHTML = `#backdrop {display: none;}`
        document.head.appendChild(prbg);
    }
    if (ajplayere != 'true') {
        const ajplayerst = document.createElement('style');
        ajplayerst.type = 'text/css';
        ajplayerst.innerHTML = `#ajax_audio_player {display: none;}`
        document.head.appendChild(ajplayerst);
    }
    if (ajplayerm === 'true') {
        var ajplayermin = document.createElement("style");
        ajplayermin.type = 'text/css';
        ajplayermin.textContent = `#ajax_audio_player {width: 155px !important;}`;
        document.head.appendChild(ajplayermin);
    }

    function moderninfoblock() {
        if (newabout === 'true') {
            if (Array.from(document.querySelectorAll('.content_title_expanded')).find(el =>
        el.getAttribute('onclick') === 'hidePanel(this);' &&
        el.textContent.trim() === tr('information')
        )) {
        const newaboutstyle = document.createElement('style');
        newaboutstyle.type = 'text/css';
        newaboutstyle.innerHTML = `
        .profile_info_link {
        display: block;
        padding: 8px 0px 9px 127px;
        user-select: none;
        }
        .profile_info_link:hover {
        background: #E9EDF1;
        }
        .right_big_block .content_title_expanded[onclick="hidePanel(this);"]:not(.content_divider .content_title_expanded) {
        display: none;
        }
        .right_big_block .content_title_expanded[onclick="hidePanel(this);"]:not(.content_divider .content_title_expanded) + div {
        display: none;
        }`
        document.head.appendChild(newaboutstyle);
        if (document.querySelector('.accountInfo .profileName h2')) {
        const infoblockhead = Array.from(document.querySelectorAll('.content_title_expanded')).find(el =>
        el.getAttribute('onclick') === 'hidePanel(this);' &&
        el.textContent.trim() === tr('information')
        );
        infoblockhead.style = "display:none;"
        const basicInfo = document.querySelector('#basicInfo');
        if (!basicInfo || document.getElementById("showFullInfoButton")) return;

        const oldInfoButton = document.querySelector('.right_big_block .content_title_expanded[onclick="hidePanel(this);"]:not(.content_divider .content_title_expanded)');
        const fullInfo = oldInfoButton ? oldInfoButton.nextElementSibling : null;

        if (fullInfo) fullInfo.style.display = "none";

        const showFullButtonHTML = `<a class="profile_info_link" id="showFullInfoButton">${localization.vkifynpfulls}</a>`;
        basicInfo.insertAdjacentHTML("afterend", showFullButtonHTML);

        const showFullInfoButton = document.getElementById("showFullInfoButton");
        showFullInfoButton.addEventListener("click", () => {
        if (fullInfo) {
        const isHidden = fullInfo.style.display === "none";
        fullInfo.style.display = isHidden ? "block" : "none";
        showFullInfoButton.textContent = isHidden ? localization.vkifynpfullh : localization.vkifynpfulls;
        }
        });
        }}}
    }
    if (enable_vk2012 == 'true') {
        document.head.appendChild(vk2012style);
        if (flatplayerbtns == 'true') {
            document.head.appendChild(vk2012flat_btns);
        }
        var copydate = '2006-2012';
        switch(String(vk2012_header_type)){
            case "1":
                document.head.appendChild(vk2012header1);
                break;
            case "2":
                document.head.appendChild(vk2012header2);
                break;
            case "3":
                document.head.appendChild(vk2012header3);
                break;
            case "4":
                document.head.appendChild(vk2012header4);
                break;
            case "5":
                document.head.appendChild(vk2012header5);
                break;
            case "6":
                document.head.appendChild(vk2012header6);
                break;
            case "7":
                document.head.appendChild(vk2012header7);
                break;
            case "8":
                document.head.appendChild(vk2012header8);
                break;
            case "9":
                document.head.appendChild(vk2012header9);
                break;
            case "custom":
                document.head.appendChild(vk2012header_custom);
                break;
        }
    }
    if (adm_ava_repl == 'true') {
        switch(String(adm_ava)) {
            case "1":
                document.head.appendChild(admava1);
                break;
            case "2":
                document.head.appendChild(admava2);
                break;
        }
    }
    function fiximg() {
        u(`.attachments`).nodes.forEach(node => {
            if(node.querySelectorAll(".media_makima").length < 2) {
                u(node).find(".media_makima").removeClass("media_makima")
            }
        })
    }
    function liketext() {
        if (!!document.querySelector('link[href*="microblog.css"]')) {
            document.querySelectorAll('.post-like-button:not(.post.comment .post-like-button)').forEach(button => {
                const heart = button.querySelector('.heart');
                if (heart) {
                    if (!button.querySelector('#liketext')) {
                        heart.parentNode.insertAdjacentHTML('afterbegin', `<div id="liketext" style="padding-left: 5px;">${localization.vkifyliketext} </div>`);
                    }
                }
            });
        }
    }
    function minifyajplayer(mforce = false) {
    if (ajplayerm === 'true' || mforce) {
        document.querySelectorAll("#aj_player_internal_controls").forEach(function (element) {
            element.innerHTML = `
                        <div id="aj_player_play">
                            <div id="aj_player_play_btn" class="paused"></div>
                        </div>
                        <div id="aj_player_track" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;transform: translateY(-2px);">
                            <div id="aj_player_track_name">
                                <a id="aj_player_track_title" class="noOverflow" style="max-width: 300px;user-select: none;cursor: unset;">
                                    <b>${tr('track_unknown')}</b>
                                    <br>
                                    <span>${tr('track_noname')}</span>
                                </a>
                            </div>
                        </div>
`;
        });
        window.player.__updateFace();
    }
    }
    if (team_ava_repl == 'true') {
        switch(String(team_ava)) {
            case "1":
                document.head.appendChild(teamava1);
                break;
            case "2":
                document.head.appendChild(teamava2);
                break;
        }
    }
    window.addEventListener('DOMContentLoaded', async () => {
        const ovkuserid = window.openvk.current_id;
        const csrfToken = document.querySelector('meta[name="csrf"]').getAttribute('value');
        document.title = document.title.replace("OpenVK", localization.vknaming);
        if (document.querySelector('#news')) {
            document.querySelector('#news').insertAdjacentHTML('beforebegin', `<div class="menu_divider"></div>`);
        }
        var md5script = document.createElement('script');
        md5script.setAttribute('src','https://rawcdn.githack.com/koke228666/VKify/main/scripts/md5.js');
        document.head.appendChild(md5script);
        unlockProcessing();
        if (enable_scrobble == 'true') {
            const SetTracko = player.setTrack;
            player.setTrack = async function(id, ref) {
                await SetTracko.call(player, id, ref);
                scrobbleCurrentTrack();
            };
        }
        fiximg();
        liketext();
        moderninfoblock();
        minifyajplayer();
        unbigsearch();
        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.altKey && event.code === 'KeyN') {
                var routrmsg = new CMessageBox({
                    title: 'VKify',
                    body: `Куда роутнемся?
                           <br><br>
                           <input class="routinp" type="text" placeholder="/settings">
                           `,
                    buttons: ["Открыть", tr('close')],
                    callbacks: [() => {const dest = document.querySelector(`.ovk-diag-cont[data-id="${routrmsg.id}"]`).querySelector(`.routinp`).value;
                                      router.route(dest);
                                      NewNotification('VKify', `щя роутнемся на ${dest}`, popupimg, () => {}, 5000, false);}, () => {routrmsg.close()}]
                });
            }
        });
        if (ajplayerstat === 'true') {
            const ajplayermin = document.createElement("style");
            ajplayermin.type = 'text/css';
            ajplayermin.textContent = `#ajax_audio_player {width: 155px !important;}
            #ajax_audio_player #aj_player_close_btn {opacity: 0;}
            #ajax_audio_player:hover #aj_player_close_btn {opacity: 0.6;}
            #ajax_audio_player:hover #aj_player_close_btn:hover {opacity: 1;}`;
            document.head.appendChild(ajplayermin);
            const ajplayerscr = document.createElement("style");
            ajplayerscr.type = 'text/css';
            ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: 15px !important;}`;
            document.head.appendChild(ajplayerscr);
            function stataj() {
                minifyajplayer(true);
                function statAjPlayer() {
                    const header = document.querySelector('.page_header');
                    const ajPlayer = document.getElementById('ajax_audio_player');
                    const headerRect = header.getBoundingClientRect();
                    const headerBottomRightX = headerRect.right;
                    if (document.documentElement.clientWidth - header.getBoundingClientRect().right < 170) {
                        document.querySelector('#ajax_audio_player').style = `left: ${headerBottomRightX - 815}px;top: ${document.documentElement.clientHeight - 50}px;`;
                        ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: ${document.documentElement.clientHeight - 50}px !important;}`;
                        localStorage.setItem('audio.lastX', headerBottomRightX - 815);
                    } else {
                        document.querySelector('#ajax_audio_player').style = `left: ${headerBottomRightX + 2}px;top: 49px;`;
                        ajplayerscr.textContent = `.scrolled #ajax_audio_player {top: 15px !important;}`;
                        localStorage.setItem('audio.lastX', headerBottomRightX + 2);
                    }
                }
                statAjPlayer();
                window.addEventListener('load', statAjPlayer);
                window.addEventListener('load', () => {document.querySelector('#searchBoxFastTips').innerHTML = `<div class="fastpreload"></div>`;});
                window.addEventListener('resize', statAjPlayer);
                $('#ajax_audio_player').draggable("destroy")
            }
            if (document.getElementById('ajax_audio_player')) {
                stataj();
            } else {
                const observer = new MutationObserver((mutationsList, observer) => {
                    const element = document.querySelector('#ajax_audio_player');
                    if (element) {
                        stataj();
                        observer.disconnect();
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                });
            }
        }
        if (vkgraffiti == 'true') {
            window.initGraffiti = function(event) {
                var msgbox = new CMessageBox({
                    title: tr("draw_graffiti"),
                    body: `<iframe style="width: 100%; height: 100%; border: medium;" srcdoc="
<!DOCTYPE html>
<html lang=&quot;en&quot;>
<head>
    <meta charset=&quot;UTF-8&quot;>
    <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;>
    <link rel=&quot;stylesheet&quot; href=&quot;https://rawcdn.githack.com/koke228666/VKify/main/graffiti/graffiti.css&quot;>
    <link rel=&quot;stylesheet&quot; href=&quot;https://rawcdn.githack.com/koke228666/VKify/main/graffiti/common.css&quot;>
</head>
<body>
    <div style=&quot;margin: 10px&quot;><a onclick=&quot;Graffiti.flushHistory();&quot;>${localization.graffitiflushhistory}</a> | <a onclick=&quot;Graffiti.backHistory();&quot;>${localization.graffitibackhistory}</a></div>
    <div style=&quot;background-color: #F7F7F7; padding-top: 20px; padding-bottom: 1px;&quot;>
        <div id=&quot;graffiti_aligner&quot;>
            <canvas id=&quot;graffiti_common&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
            <canvas id=&quot;graffiti_overlay&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
            <canvas id=&quot;graffiti_helper&quot; width=&quot;586&quot; height=&quot;293&quot;></canvas>
        </div>
        <div id=&quot;graffiti_resizer&quot; style=&quot;margin-top: 5px;&quot;></div>
    </div>
    <div>
        <canvas id=&quot;graffiti_controls&quot; width=&quot;586&quot; height=&quot;70&quot;></canvas>
    </div>
    <canvas id=&quot;graffiti_hist_helper&quot; width=&quot;1172&quot; height=&quot;586&quot; style=&quot;display:none;&quot;></canvas>
    <div id=&quot;graffiti_cpwrap&quot; style=&quot;display:none; top:-210px;&quot;>
        <canvas id=&quot;graffiti_cpicker&quot; width=&quot;252&quot; height=&quot;168&quot;></canvas>
    </div>
    <script src=&quot;https://rawcdn.githack.com/koke228666/VKify/main/graffiti/graffiti.js&quot;></script>
    <script>
        var cur = {&quot;lang&quot;: {&quot;graffiti_flash_color&quot;: &quot;${localization.graffiticolor} &quot;, &quot;graffiti_flash_opacity&quot;: &quot;${localization.graffitiopacity} &quot;, &quot;graffiti_flash_thickness&quot;: &quot;${localization.graffitithickness} &quot;, &quot;graffiti_normal_size&quot;: &quot;Оконный режим&quot;, &quot;graffiti_full_screen&quot;: &quot;Полноэкранный режим&quot;}}; /* последние два не используются, так что пока нет смысла переводить */
        window.onload = function() {
            Graffiti.init();
        };
    </script>
</body>
</html>
"></iframe>`,
            close_on_buttons: false,
            warn_on_exit: true,
            buttons: [tr("save"), tr("cancel")],
            callbacks: [function() {
                msgbox.getNode().find('iframe').nodes[0].contentWindow.Graffiti.getImage(function(dataURL) {
                    // ваще кому нужен этот комментарий лол
                    var blob = dataURLtoBlob(dataURL);
                    let fName = "Graffiti-" + Math.ceil(performance.now()).toString() + ".jpeg";
                    let image = new File([blob], fName, {type: "image/jpeg", lastModified: new Date().getTime()});
                    __uploadToTextarea(image, u(event.target).closest('#write'))
                });
                msgbox.close()
            }, async function() {
                const res = await msgbox.__showCloseConfirmationDialog()
                if(res === true) {
                    msgbox.close()
                }
            }]
        })
        var msgboxsel = document.querySelector(`.ovk-diag-cont.ovk-msg-all[data-id="${msgbox.id}"]`)
        msgboxsel.style.width = '800px';
        msgbox.getNode().find('.ovk-diag-body').attr('style', 'height:550px;')
        function dataURLtoBlob(dataURL) {
            var arr = dataURL.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
    };
}
        function setTip(obj, text, interactive=false) {
            tippy(obj, {
                content: `<text style="font-size: 11px;">${text}</text>`,
                allowHTML: true,
                placement: 'top',
                theme: 'light vk',
                animation: 'shift-away',
                interactive: interactive
            });
        }
        function fullattachmenu() {
            const fullWallAttach = `<a class="header menu_toggler">
                        ${tr('attach')}
                    </a>
                    <a id="__photoAttachment">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-egon.png">
                        ${tr('photo')}
                    </a>
                    <a id="__videoAttachment">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-vnd.rn-realmedia.png">
                        ${tr('video')}
                    </a>
                    <a id="__audioAttachment">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/audio-ac3.png">
                        ${tr('audio')}
                    </a>
                    <a id="__documentAttachment">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-octet-stream.png">
                        ${tr('document')}
                    </a>
                    <a id="__notesAttachment">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/mimetypes/application-x-srt.png">
                        ${tr('note')}
                    </a>
                    <a onclick="initGraffiti(event);">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/draw-brush.png">
                        ${tr('graffiti')}
                    </a>
                    <a onclick="initPoll(event);">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/office-chart-bar-stacked.png">
                        ${tr('poll')}
                    </a>
                    <a id="__geoAttacher">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/apps/amarok.png">
                        ${tr('geo_place')}
                    </a>
                    <a id="__sourceAttacher">
                        <img src="/assets/packages/static/openvk/img/oxygen-icons/16x16/actions/insert-link.png">
                        ${tr('source')}
                    </a>`;

        const wallAttach = document.getElementById('wallAttachmentMenu');
        if (wallAttach) {
            wallAttach.innerHTML = fullWallAttach;
        }
    }
        fullattachmenu();
        function addtips() {
            setTip('img.name-checkmark', localization.vkifyverifiedpopup)
        }
        if (enable_vk2012) {
            addtips();
        };
    window.player.__highlightActiveTrack = function() {
        u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
    }
        const originalInitEvents = window.player.initEvents;
        window.player.initEvents = function() {
            originalInitEvents.call(this);
            this.audioPlayer.ontimeupdate = () => {
                const current_track = this.currentTrack;
                if (!current_track) {
                    return;
                }
                /* я не умею считать так что пусть будет пиксель пёрфект) */
                const time = this.audioPlayer.currentTime;
                const ps = ((time * 104) / current_track.length).toFixed(3);
                this.uiPlayer.find(".time").html(fmtTime(time));
                this.__updateTime(time);

                if (ps <= 104) {
                    this.uiPlayer.find(".track .selectableTrack .slider").attr('style', `padding-left:${ps}%`);

                    if (this.linkedInlinePlayer) {
                        this.linkedInlinePlayer.find(".subTracks .lengthTrackWrapper .slider").attr('style', `padding-left:${ps}%`);
                        this.linkedInlinePlayer.find('.mini_timer .nobold').html(fmtTime(time));
                    }

                    if (this.ajaxPlayer) {
                        this.ajaxPlayer.find('#aj_player_track_length .slider').attr('style', `padding-left:${ps}%`);
                        this.ajaxPlayer.find('#aj_player_track_name #aj_time').html(fmtTime(time));
                    }
                }
            };
            this.audioPlayer.onvolumechange = () => {
                const volume = this.audioPlayer.volume;
                const ps = Math.ceil((volume * 132) / 1);

                if (ps <= 132) {
                    this.uiPlayer.find(".volumePanel .selectableTrack .slider").attr('style', `padding-left:${ps}%`);

                    if (this.linkedInlinePlayer) {
                        this.linkedInlinePlayer.find(".subTracks .volumeTrackWrapper .slider").attr('style', `padding-left:${ps}%`);
                    }

                    if (this.ajaxPlayer) {
                        this.ajaxPlayer.find('#aj_player_volume .slider').attr('style', `padding-left:${ps}%`);
                    }
                }

                localStorage.setItem('audio.volume', volume);
            };
        };
        window.player.initEvents();
        const vkfavicon = {
            1: "data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACskXaEXDOHXzaIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeEXTKefV6AVyx5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB4TiB8VCeIXzh5TiB5TiB5TiB5TiB5TiB6TyB5TyF5TiF5TiB5TiB5TiB5TiB5TiB5TiCCWzCIYTh6UCF7UCF7UCJ6UCKbfFmcfFmbfFmcfFmcfFmMZj16UCJ7UCJ7UCF6UCGDWy+KYjl+UyV+VCV/VCV+UyX////////////////////////HtKB/VCV+VCV+VCWGXTGMZTuCVymBVymCVymCVyn////////g1crBq5Tw6+X///////+hgV6CVyiCVymIXzSPZz6GXC2GWiyFWiyFWi3////////DrZaGWyykg2L////////DrZaFWy2GWi2MYzeRaUCKYDGJXjCKXjCJXjD////////49fLx6+b49fL///////+ZckqJXjCJXjCPZjqUbEOPZDaOYzWOYzWOYzX///////////////////////+5noGPYzWOYzWPYzWUaT+Xb0aVaTyTZzqTaDqTaDr////////Xx7a8oYX59vP////JtJ2TaDqUZzqUaDuXbkKZcUmYbD+Xaz2Xaz2Yaz7////////MtZ+edEny7ef////l2s+Yaz6Xaz2Xaz2ackabdEqccEKabkCabkCbbUD////////////////////////g0sSbbkGabkCbbkKddEmedk6hckaecUSeckSeckTn3NHn3NHn3NHn3NHn3NHbyrmke1GeckSeckSfckWheE6gdk6hdUifc0Wgc0agc0agc0agc0afc0agc0agc0afc0agc0agc0afc0afdEakfFCddEqjeEmjeUmjeEmkeEmkeUqjeEqkeUujeUqjeUqjeUqjeUqjeUqjeUqkekucc0S8o4ufd06jfFKjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOgd020mHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "play": "data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAABAQAAABAAgAaAUAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAArJF2/4RcM/+HXzb/iGA3/4hgN/+IYDf/iGA3/4hgN/+IYDf/iGA3/4hgN/+IYDf/+vn3/8azoP+HYjj/nn1e/4BXLP95TiD/eU4g/3lOIP95TiD/eU4g/3lOIP95TiD/eU4g/3lOIP95TiD/eU4g////////////5NzU/5R0T/+IXzj/eU4g/3lOIP95TiD/eU4g/3lOIP96TyD/eU8h/3lOIf95TiD/eU4g/3lOIP/////////////////u6eT/iGE4/3pQIf97UCH/e1Ai/3pQIv+bfFn/nHxZ/5t8Wf+cfFn/nHxZ/4xmPf96UCL///////////+/rJb/hmA1/4piOf9+UyX/flQl/39UJf9+UyX/////////////////////////////////x7Sg/+vl3v+aeVT/flQl/4ZdMf+MZTv/glcp/4FXKf+CVyn/glcp////////////4NXK/8GrlP/w6+X///////////+hgV7/glco/4JXKf+IXzT/j2c+/4ZcLf+GWiz/hVos/4VaLf///////////8Otlv+GWyz/pINi////////////w62W/4VbLf+GWi3/jGM3/5FpQP+KYDH/iV4w/4peMP+JXjD////////////49fL/8evm//j18v///////////5lySv+JXjD/iV4w/49mOv+UbEP/j2Q2/45jNf+OYzX/jmM1/////////////////////////////////7megf+PYzX/jmM1/49jNf+UaT//l29G/5VpPP+TZzr/k2g6/5NoOv///////////9fHtv+8oYX/+fbz///////JtJ3/k2g6/5RnOv+UaDv/l25C/5lxSf+YbD//l2s9/5drPf+Yaz7////////////MtZ//nnRJ//Lt5///////5drP/5hrPv+Xaz3/l2s9/5pyRv+bdEr/nHBC/5puQP+abkD/m21A/////////////////////////////////+DSxP+bbkH/mm5A/5tuQv+ddEn/nnZO/6FyRv+ecUT/nnJE/55yRP/n3NH/59zR/+fc0f/n3NH/59zR/9vKuf+ke1H/nnJE/55y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",
            "pause": "data:image/x-icon;base64,AAABAAIAEBAAAAEACABoBQAAJgAAABAQAAABACAAaAQAAI4FAAAoAAAAEAAAACAAAAABAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeU4gAHpQIQB+UyUAflQlAIFXKACAVywAhVosAIZcLQCFXDIAh182AIleMACIXzQAiF84AIpgMQCIYDcAjmM1AI9kNgCJYTgAjWU6AI1mPQCTZzoAlGc6AJNoOgCUaDsAlmo9AJhrPgCYbD8AkWlAAJVtQgCXb0YAmm1AAJxwQgCackYAnnJEAJ90RgCZcUkAm3RKAJ10SQCedk4Am3xZAJx8WQCgckYAoXVIAKB2TQCjeEkApHlKAKF4TgCke1EAo3xSAKR8UAChgV4ApINiAKyRdgC0mHsAuZ6BALyhhQC8o4sAwauUAMOtlgDJtJ0AzLWfAMe0oADXx7YA28q5AODSxADg1coA5drPAOfc0QDw6+UA8u3nAPj18gD///8AEf9bADH/cQBR/4cAcf+dAJH/sgCx/8kA0f/fAP///wAAAAAAAi8AAARQAAAGcAAACJAAAAqwAAALzwAADvAAACD/EgA9/zEAW/9RAHn/cQCY/5EAtf+xANT/0QD///8AAAAAABQvAAAiUAAAMHAAAD2QAABMsAAAWc8AAGfwAAB4/xEAiv8xAJz/UQCu/3EAwP+RANL/sQDk/9EA////AAAAAAAmLwAAQFAAAFpwAAB0kAAAjrAAAKnPAADC8AAA0f8RANj/MQDe/1EA4/9xAOn/kQDv/7EA9v/RAP///wAAAAAALyYAAFBBAABwWwAAkHQAALCOAADPqQAA8MMAAP/SEQD/2DEA/91RAP/kcQD/6pEA//CxAP/20QD///8AAAAAAC8UAABQIgAAcDAAAJA+AACwTQAAz1sAAPBpAAD/eREA/4oxAP+dUQD/r3EA/8GRAP/SsQD/5dEA////AAAAAAAvAwAAUAQAAHAGAACQCQAAsAoAAM8MAADwDgAA/yASAP8+MQD/XFEA/3pxAP+XkQD/trEA/9TRAP///wAAAAAALwAOAFAAFwBwACEAkAArALAANgDPAEAA8ABJAP8RWgD/MXAA/1GGAP9xnAD/kbIA/7HIAP/R3wD///8AAAAAAC8AIABQADYAcABMAJAAYgCwAHgAzwCOAPAApAD/EbMA/zG+AP9RxwD/cdEA/5HcAP+x5QD/0fAA////AAAAAAAsAC8ASwBQAGkAcACHAJAApQCwAMQAzwDhAPAA8BH/APIx/wD0Uf8A9nH/APeR/wD5sf8A+9H/AP///wAAAAAAGwAvAC0AUAA/AHAAUgCQAGMAsAB2AM8AiADwAJkR/wCmMf8AtFH/AMJx/wDPkf8A3LH/AOvR/wD///8AAAAAAAgALwAOAFAAFQBwABsAkAAhALAAJgDPACwA8AA+Ef8AWDH/AHFR/wCMcf8AppH/AL+x/wDa0f8A////ADQIDAwRDBEMDBEMKEYoRigFAAAAAAAAAAAAAChGKEYoDAABAAAAAQEBAAAoRihGKBEBAQEBKCgnKCgTKEYoRigRAgMDAkdHR0dHRz0DAwMIEgQEBARHR0E5REdHMgQEDhsHBgcGR0c6BzNHRzoGBw8bDQoKCkdHRkVGR0ckCgoSHBAQEA9HR0dHR0c2EA8QGB0XFhYXR0c+N0ZHOxcVFxwjGhkZGUdHPCVFR0IZGRggJB8eHh5HR0dHR0dAHx4fJSYpISEiQ0NDQ0M/MCEhIS4rKiIpIiIiIiIiIiIiIiIxJSwtLS0tLS0tLS0tLS0tITgmMDAwMDAwMDAwMDAwKzUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKyRdv+EXDP/h182/4hgN/+IYDf/iGA3/4hgN/+IYDf/iGA3/4hgN/+IYDf/nHxZ//j18v+cfFn/+PXy/5x8Wf+AVyz/eU4g/3lOIP95TiD/eU4g/3lOIP95TiD/eU4g/3lOIP95TiD/eU4g/5x8Wf/49fL/nHxZ//j18v+cfFn/iF84/3lOIP95TiD/eU4g/3lOIP95TiD/ek8g/3lPIf95TiH/eU4g/3lOIP+cfFn/+PXy/5x8Wf/49fL/nHxZ/4hhOP96UCH/e1Ah/3tQIv96UCL/m3xZ/5x8Wf+bfFn/nHxZ/5x8Wf+MZj3/nHxZ//j18v+cfFn/+PXy/5x8Wf+KYjn/flMl/35UJf9/VCX/flMl/////////////////////////////////8e0oP9/VCX/flQl/35UJf+GXTH/jGU7/4JXKf+BVyn/glcp/4JXKf///////////+DVyv/Bq5T/8Ovl////////////oYFe/4JXKP+CVyn/iF80/49nPv+GXC3/hlos/4VaLP+FWi3////////////DrZb/hlss/6SDYv///////////8Otlv+FWy3/hlot/4xjN/+RaUD/imAx/4leMP+KXjD/iV4w////////////+PXy//Hr5v/49fL///////////+Zckr/iV4w/4leMP+PZjr/lGxD/49kNv+OYzX/jmM1/45jNf////////////////////////////////+5noH/j2M1/45jNf+PYzX/lGk//5dvRv+VaTz/k2c6/5NoOv+TaDr////////////Xx7b/vKGF//n28///////ybSd/5NoOv+UZzr/lGg7/5duQv+ZcUn/mGw//5drPf+Xaz3/mGs+////////////zLWf/550Sf/y7ef//////+Xaz/+Yaz7/l2s9/5drPf+ackb/m3RK/5xwQv+abkD/mm5A/5ttQP/////////////////////////////////g0sT/m25B/5puQP+bbkL/nXRJ/552Tv+hckb/nnFE/55yRP+eckT/59zR/+fc0f/n3NH/59zR/+fc0f/byrn/pHtR/55yRP+eckT/n3JF/6F4Tv+gdk7/oXVI/59zRf+gc0b/oHNG/6BzRv+gc0b/n3NG/6BzRv+gc0b/n3NG/6BzRv+gc0b/n3NG/590Rv+kfFD/nXRK/6N4Sf+jeUn/o3hJ/6R4Sf+keUr/o3hK/6R5S/+jeUr/o3lK/6N5Sv+jeUr/o3lK/6N5Sv+kekv/nHNE/7yji/+fd07/o3xS/6N9U/+jfVP/o31T/6N9U/+jfVP/o31T/6N9U/+jfVP/o31T/6N9U/+jfVP/oHdN/7SYe/8AAKxBAACsQQAArEEAAKxBAACsQQAArEEAAKxBAACsQQAArEEAAKxBAACsQQAArEEAAKxBAACsQQAArEEAAKxB",
            2: "data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrglyYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzurglyYZzurglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22fckmfckmfckmfckmidk2qgVyzj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////////////y7OfMtJ6uh2Ozj22zj22rglyYZzuYZzurglyzj22zj22zj23////////Ww7Hcy7v59/T////Bo4ezj22zj22rglyYZzuYZzurglyzj22zj22zj23///////+qgVyqgVzNtZ/////UwK2zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////PuKPNtqD59vP59/TCpYqzj22zj22rglyYZzuYZzurglyzj22zj22zj23////////r4dj18Ov59vPBpIizj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23///////+qgVyshWD////y7Oezj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////MtJ7f0ML////59/Szj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////////////18OzRvKezj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzu8nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH6YZzurglyYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzurglwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            3: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP/////////////////8+vn/8uzm/9XBrv+sg17/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz////////////SvKj/2ce1//v59///////0ryn/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/6uCXP/dzb7//////+TWyv+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////9jFs//byrr/+vj2/////v/KsZn/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz////////////07un/+/n3///////RuqX/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/7iWdv//////+/n3/6+HY/+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////9K8qP/k1sr///////7+/v+yjGn/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////+/n3//Tv6v/OtqD/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
            4: "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxzUCCgd1N5pn5a/6d+W/+fdlKkAAAAAJtyTw6fdlJzpX1Z56Z+Wv+cc1CqAAAAAAAAAAAAAAAAAAAAAJ10UTalfFjRrIRf/6+HYv+vh2L/qYFc/6F4VDiielaYqoFd/66GYf+shF//nnVS/wAAAAAAAAAAAAAAAJ10UUSnflrtroZh/7CIY/+wiGP/sIhj/66GYf+shF/wrYVg/6+HYv+thWD/pHtX/5VsSpEAAAAAAAAAAJxzUDGnflrzroZh/7CIY/+wiGP/sIhj/7CIY/+wiGP/sIhj/7CIY/+wiGP/qIBb/5lwTZuTaUcMAAAAAJpxTiGkfFjUrYVg/66GYf+shF//r4di/7CIY/+wiGP/r4di/6yEX/+vh2L/r4di/6Z9WuMAAAAAAAAAAAAAAACfdlKFq4Ne/66GYf+of1v/pXtY2KuDXv+wiGP/sIhj/6uDXv+lfVnYqYFd/66GYf+qgV3snXRQPgAAAACacU4vp35a7a+HYv+rg17/nnZTzZpyTyqnf1r/sIhj/7CIY/+nf1r/m3JPKqF3VOuthGD/roZh/6V9WOOacU4vnXRRlKyDX/+vh2L/p35a/5huTFsAAAAAp39a/7CIY/+vh2L/pHxX/wAAAACWbUt4p39a/6+HYv+sg1//nXRRlJ10UfmpgFz/qYBc/511Uv+WbUoGmXBNTKd9Wv+rg17/qoFd/552UvgAAAAAlGtICJ51Uv+pgFz/qYBc/510UfmUa0ismnFO+plvTduUakhyAAAAAJVrSd2bck76nXNQ+ppxTvGUa0icAAAAAAAAAACUakhmmW9N45pxTvqUa0iiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA+CAAAPAAAADgAAAAwAAAAIADAACAAQAAAAAAAAQgAAAAIAAACDAAAP//AAD//wAA//8AAA==",
            "new_play": "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP//////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAvkQAAL/4AADBsAAAw2wAAMUoAADG6AAAyKgAAMpsAADMNAAAzfwAAM/EAADRlAAA02AAANU0AADXCAAA2Nw==",
            "new_pause": "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////q4Jc/6uCXP////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/////////////////6uCXP+rglz/////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP////////////////+rglz/q4Jc/////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        }
        function playgifs() {
            if (gifsautoplay == 'true') {
                document.querySelectorAll('.docMainItem.viewerOpener.docGalleryItem.embeddable').forEach(elem => {
                    if (!elem.classList.contains("playing")) {
                        elem.classList.toggle("playing");
                    }
                });
            }}
        playgifs();
        if (window.location.href.includes('im?sel=')) {
            var emojicss=document.createElement("link");
            emojicss.rel="stylesheet";
            emojicss.href="https://rawcdn.githack.com/koke228666/VKify/refs/heads/main/emojis/vkemoji.css";
            document.getElementsByTagName("head")[0].appendChild(emojicss);
            function simkeypress(symbol, element) {
                const keyPressEvent = new KeyboardEvent('keydown', {
                    key: symbol,
                    keyCode: symbol.charCodeAt(0),
                    code: symbol,
                    which: symbol.charCodeAt(0),
                    bubbles: true
                });
                element.dispatchEvent(keyPressEvent);
                element.value += symbol;
                const changeEvent = new Event('change', {
                    bubbles: true,
                    cancelable: true
                });

                element.dispatchEvent(changeEvent);
            }

            function UnicodeToText(code) {
                const bytes = code.match(/.{1,2}/g);
                const byteArray = bytes.map(byte => parseInt(byte, 16));
                const uint8Array = new Uint8Array(byteArray);
                const textDecoder = new TextDecoder('utf-8');
                return textDecoder.decode(uint8Array);
            }
            const sendbtn = document.querySelector('button.button[data-bind="click: sendMessage"]');
            const blockel = document.querySelector('.messenger-app--input .blocked');
            if (blockel == null){
                /* ашалеть, надо почистить */
                const emojis = ["f09f9882", "e29da4", "f09f9898", "f09f988d", "f09fa4a3", "f09f98ad", "f09f988a", "f09f918d", "f09f928b", "f09f9881", "e298ba", "f09f9988", "f09f9889", "f09f9894", "f09f9984", "f09f988f", "f09f989c", "f09f9885", "f09f98b3", "f09f9295", "f09f98a9", "f09f998f", "f09f918f", "f09f918c", "f09f9296", "f09fa4ad", "f09f9299", "f09fa494", "f09fa497", "f09f9892", "f09f9298", "f09f9884", "f09f988b", "f09f929c", "f09f98b1", "f09fa4aa", "f09f928d", "f09f98a1", "f09f988c", "f09f988e", "f09f9297", "f09f8e89", "f09f9886", "f09f929e", "f09f989a", "f09f94a5", "f09f989d", "f09f98a2", "f09fa4a6e2808de29980", "f09fa4a6e2808de29980efb88f", "f09f9883", "f09f998c", "f09f9695", "f09f9983", "f09fa4a9", "f09f929b", "f09f92aa", "f09f9294", "f09f9887", "f09f96a4", "e299a5", "f09fa4a4", "f09f998a", "f09f98b4", "f09f8cb9", "f09f929a", "f09f9180", "e29c8c", "e29da3", "f09fa4b7e2808de29980", "f09fa4b7e2808de29980efb88f", "f09f9982", "e298b9", "f09f98ac", "f09f9888", "f09f989b", "f09f98ab", "f09f989e", "f09f98bb", "f09f92a6", "f09f9891", "f09f9293", "f09f9895", "f09f9880", "f09fa493", "f09fa4ab", "f09f9185", "f09f8e82", "f09fa49e", "f09f918a", "f09f98b9", "f09f9283", "f09f929d", "f09f928f", "f09f928ff09f8fbb", "f09f928ff09f8fbc", "f09f928ff09f8fbd", "f09f928ff09f8fbe", "f09f928ff09f8fbf", "f09fa4a6e2808de29982", "f09fa4a6e2808de29982efb88f", "f09f92af", "f09f92a9", "f09f98a4", "f09f9890", "f09fa4ac", "f09f8e88", "f09f9981", "f09fa7a1", "f09fa499", "f09fa4af", "f09f918b", "f09f9893", "e29880", "f09f9280", "e29ca8", "f09fa4b7e2808de29982", "f09fa4b7e2808de29982efb88f", "f09fa4a2", "f09f98aa", "f09f8cb8", "f09f8e8a", "f09f8e81", "f09f9281e2808de29980", "f09f9281e2808de29980efb88f", "f09f9899", "f09f98b0", "f09f9896", "f09fa498", "f09f929f", "f09f9291", "f09f9291f09f8fbb", "f09f9291f09f8fbc", "f09f9291f09f8fbd", "f09f9291f09f8fbe", "f09f9291f09f8fbf", "f09fa4ae", "f09f8cba", "f09fa790", "f09f9290", "f09fa4a1", "f09f8dbe", "f09f8c9a", "f09fa491", "f09f98b7", "f09f8eb6", "f09f998be2808de29980", "f09f998be2808de29980efb88f", "f09f91ab", "f09fa684", "f09f98a3", "f09fa582", "f09f98a5", "f09f9897", "f09fa490", "f09f8dbb", "f09f9490", "f09f918e", "f09fa4a8", "f09f94ab", "f09f90b6", "f09f9186", "f09f9191", "f09f989f", "f09f8cb7", "f09fa68b", "f09f98b6", "f09f8d86", "f09f8d80", "f09f8db7", "f09f92a5", "f09fa4a0", "f09f91bb", "f09f8dba", "f09fa4a7", "f09f98a8", "e29d8c", "f09f90b7", "e280bc", "e29c8b", "f09fa49f", "e29c8a", "e2ad90", "f09f8d91", "f09f98ae", "f09f928e", "e2989d", "f09f9189", "f09f8f83e2808de29982", "f09f8f83e2808de29982efb88f", "f09f91b8", "f09f98a0", "f09f98b5", "f09f9989", "e29895", "e29d84", "f09f8db0", "f09f9184", "f09fa495", "f09f8c88", "f09fa580", "f09f90be", "f09f91bf", "e29c94", "f09f91af", "f09f91aff09f8fbb", "f09f91aff09f8fbc", "f09f91aff09f8fbd", "f09f91aff09f8fbe", "f09f91aff09f8fbf", "f09f98b2", "f09f92a8", "f09f8cbb", "f09f95ba", "f09f9181", "f09f92a4", "f09f8cbc", "f09f928c", "f09f98a7", "f09f98bd", "f09fa492", "f09f91b6", "f09f92ab", "e29abd", "f09f998be2808de29982", "f09f998be2808de29982efb88f", "f09f90b0", "f09f9690", "e298a0", "f09f8c9f", "f09f92b0", "f09f90bb", "f09f8d95", "f09f9980", "f09f90bc", "f09f91ad", "f09fa49d", "f09fa49df09f8fbb", "f09fa49df09f8fbc", "f09fa49df09f8fbd", "f09fa49df09f8fbe", "f09fa49df09f8fbf", "f09fa587", "f09f98af", "e29aa1", "f09f949d", "f09f90a5", "f09f91bc", "f09f8e84", "f09f9187", "f09f9285", "f09f8db8", "f09f8cb4", "f09fa583", "f09f92b8", "f09f9188", "f09f9696", "f09f94aa", "f09f8db9", "f09fa4a5", "f09f9ab6e2808de29982", "f09f9ab6e2808de29982efb88f", "f09f8d8c", "f09f9289", "f09f8c8d", "f09f8e80", "f09f8d93", "e29c88", "f09f8f83e2808de29980", "f09f8f83e2808de29980efb88f", "f09fa49a", "f09f98a6", "f09f90bd", "e29c85", "f09f90b1", "f09fa681", "f09fa49b", "f09f91a3", "f09f8c9e", "f09f92a3", "f09f8f80", "e29d97", "f09f8cae", "f09f9281e2808de29982", "f09f9281e2808de29982efb88f", "f09f8f86", "f09fa4b2", "f09f91b0", "f09f9092", "f09f98bf", "f09f8c99", "f09f909d", "f09f90a3", "f09f8c8e", "f09f90b8", "e29d93", "f09f8c8a", "f09f92b5", "e29898", "f09f91bd", "f09f8d83", "f09f8d92", "f09f92ad", "f09f91b9", "e2ad95", "f09f8dbc", "f09f9284", "f09f8d94", "f09f8eb5", "f09f8c9d", "f09fa49c", "f09f8d89", "f09fa4b0", "f09f90af", "f09f8da6", "f09f9190", "f09f8cb6", "f09f8cbf", "f09f8e85", "e29883", "f09f908d", "f09f9199", "f09f8cb2", "f09f8dad", "f09f8d81", "f09f8da9", "f09fa58a", "f09f8ea4", "f09f8daa", "f09fa4b4", "f09f8ca7", "f09f90a2", "f09fa7a0", "f09f8dab", "f09f90b5", "f09f91b5", "f09f8fb3e2808df09f8c88", "f09f8fb3efb88fe2808df09f8c88", "f09f8fb3efb88fe2808df09f8c88efb88f", "e29c8d", "f09f958a", "f09f8cad", "f09f98b8", "f09fa68a", "f09f8f88", "f09f8ebc", "e29b84", "f09f8d9f", "f09f8caa", "f09f8d8d", "f09fa685", "f09f8c80", "f09f90ad", "f09f909f", "f09fa680", "f09f9a80", "f09f91a9", "e29abe", "f09f8cb5", "f09f9aac", "f09f95b7", "f09f97a3", "f09fa780", "f09f90ac", "f09f90bf", "e29894", "f09f90b4", "f09f8ea7", "f09f8caf", "f09f90b3", "f09f8cb3", "f09f8d8e", "f09f8d97", "f09f949e", "f09f98bc", "f09f90a0", "f09f8d82", "f09f92a7", "f09f91be", "f09fa4b3", "f09f9183", "f09f98ba", "f09f9094", "e29891", "f09f8dbf", "f09f90a8", "f09fa686", "f09f9a97", "e29881", "f09fa4b1", "f09f94b4", "f09f8cb1", "f09f9492", "f09f8e83", "f09f9ab6e2808de29980", "f09f9ab6e2808de29980efb88f", "f09fa591", "f09f8d8b", "f09fa79ae2808de29980", "f09fa79ae2808de29980efb88f", "f09f9687", "f09f93b8", "f09fa59a", "f09fa593", "f09f8d87", "f09f9182", "f09f8f8ae2808de29982", "f09f8f8ae2808de29982efb88f", "f09f928a", "f09f90a7", "f09f91b4", "f09f8d8a", "f09fa4b5", "f09f91a7", "f09fa68d", "f09fa689", "f09f909b", "f09f8ca4", "f09f9287e2808de29980", "f09f9287e2808de29980efb88f", "f09f9099", "f09f8d84", "f09f8cbe", "f09fa595", "f09f8698", "f09f9aab", "f09fa592", "f09f95b6", "f09f8e93", "f09f91a0", "f09f9bab", "f09fa496", "f09f8cbd", "f09fa597", "f09fa594", "f09f8eb8", "f09f9aa8", "f09f8db4", "f09f8dac", "f09f8ea5", "e29aaa", "f09f9098", "e29b88", "f09f8fa1", "f09f90ae", "f09f998de2808de29980", "f09f998de2808de29980efb88f", "f09fa59e", "f09fa590", "f09fa5a5", "f09f8daf", "f09f91a6", "f09f8c8c", "e28189", "f09f8db3", "e29ab0", "f09f91ba", "f09f92b6", "f09f909e", "f09f8e86", "f09f91a8", "e29884", "f09fa687", "f09f90a4", "f09f9491", "f09f8cac", "f09fa59c", "f09fa696", "f09f90b9", "f09f8d85", "f09f98be", "f09f9b80", "f09fa683", "f09f93b1", "f09f8da4", "f09f90ba", "f09f8d8f", "f09f8dbd", "f09f9088", "f09f8ca8", "f09fa690", "f09fa796e2808de29980", "f09fa796e2808de29980efb88f", "e284a2", "f09f9ab4e2808de29982", "f09f9ab4e2808de29982efb88f", "e29aa0", "f09fa682", "f09f8f9d", "e29bb1", "f09fa581", "f09f9b8d", "e29c82", "f09f9093", "f09f8c8f", "f09f9090", "f09fa59d", "f09f8f90", "f09f9091", "f09fa79fe2808de29980", "f09fa79fe2808de29980efb88f", "f09fa79ff09f8fbbe2808de29980", "f09fa79ff09f8fbbe2808de29980efb88f", "f09fa79ff09f8fbce2808de29980", "f09fa79ff09f8fbce2808de29980efb88f", "f09fa79ff09f8fbde2808de29980", "f09fa79ff09f8fbde2808de29980efb88f", "f09fa79ff09f8fbee2808de29980", "f09fa79ff09f8fbee2808de29980efb88f", "f09fa79ff09f8fbfe2808de29980", "f09fa79ff09f8fbfe2808de29980efb88f", "f09f9197", "f09f939a", "f09f8d9d", "f09f8ead", "f09fa688", "f09fa596", "f09f908c", "f09f95af", "f09f94b5", "f09f9a99", "f09f8e99", "f09f908e", "f09f8f96", "f09f91ac", "f09f8f85", "f09f94ae", "f09f8ebe", "f09f8d9e", "f09f91aa", "f09f91aaf09f8fbb", "f09f91aaf09f8fbc", "f09f91aaf09f8fbd", "f09f91aaf09f8fbe", "f09f91aaf09f8fbf", "f09f8e87", "f09f998ee2808de29980", "f09f998ee2808de29980efb88f", "f09f9087", "f09f8ca0", "f09f8c85", "f09f93b7", "f09f8f8ae2808de29980", "f09f8f8ae2808de29980efb88f", "f09f95b8", "e29a93", "f09f8f87", "f09fa59b", "f09f8da7", "e29a94", "f09f92b2", "f09f908b", "f09f9095", "e2ac87", "f09f8ea3", "f09f8eaf", "f09f90a6", "f09f93a2", "f09fa695", "f09fa79fe2808de29982", "f09fa79fe2808de29982efb88f", "f09fa79ff09f8fbbe2808de29982", "f09fa79ff09f8fbbe2808de29982efb88f", "f09fa79ff09f8fbce2808de29982", "f09fa79ff09f8fbce2808de29982efb88f", "f09fa79ff09f8fbde2808de29982", "f09fa79ff09f8fbde2808de29982efb88f", "f09fa79ff09f8fbee2808de29982", "f09fa79ff09f8fbee2808de29982efb88f", "f09fa79ff09f8fbfe2808de29982", "f09fa79ff09f8fbfe2808de29982efb88f", "f09f8d96", "e29e96", "f09f909a", "f09fa5a9", "f09fa5a6", "f09f8da3", "f09f95b4", "e29ea1", "f09f8d9c", "f09fa691", "f09fa798e2808de29980", "f09fa798e2808de29980efb88f", "f09f9a98", "f09f97a1", "f09f908a", "f09f8eba", "f09f938d", "f09fa4b6", "f09f8f81", "f09f909c", "f09f8cb0", "f09f938c", "f09f9ab4e2808de29980", "f09f9ab4e2808de29980efb88f", "f09f91b3e2808de29982", "f09f91b3e2808de29982efb88f", "e29aab", "f09f93b2", "f09f8f84e2808de29982", "f09f8f84e2808de29982efb88f", "f09fa68e", "f09f939e", "f09f8ebb", "f09f8eb9", "f09f8ea8", "f09f92a1", "f09f8eac", "f09f919f", "f09fa5a8", "f09f8eae", "f09f8cab", "f09fa694", "f09fa5a4", "f09f8ca9", "f09f9089", "f09f8eb7", "f09f8d90", "f09f85b1", "f09f8ea9", "f09f8fa0", "e28fb0", "f09f9084", "f09f9096", "f09f8d88", "f09f8ca6", "f09f92b7", "e29b85", "e29bb7", "f09fa794", "f09f8da8", "f09f92bb", "f09f90a9", "f09f9097", "f09f90b2", "e29bb3", "e299a0", "e2ac86", "f09fa795", "f09f8db1", "f09f8d9a", "f09f9abd", "e2988e", "f09f9bac", "f09f94a8", "f09f92ac", "f09fa68c", "f09fa79ee2808de29980", "f09fa79ee2808de29980efb88f", "f09f9abf", "f09f9080", "f09f948a", "e29a9c", "f09f8c9b", "f09f8eb1", "f09f97bd", "f09f9287e2808de29982", "f09f9287e2808de29982efb88f", "f09f998ee2808de29982", "f09f998ee2808de29982efb88f", "f09fa796e2808de29982", "f09fa796e2808de29982efb88f", "f09fa79ce2808de29982", "f09fa79ce2808de29982efb88f", "e29e95", "f09f8db5", "f09f8f8d", "f09fa79ae2808de29982", "f09fa79ae2808de29982efb88f", "f09f93bd", "f09f948c", "f09f8c8b", "f09f94b2", "f09f8c91", "f09fa599", "f09f8f8e", "e299a6", "f09f8ca5", "e380b0", "f09f8da0", "f09f9196", "f09f8da1", "f09f8f8ce2808de29982", "f09f8f8cefb88fe2808de29982efb88f", "f09f9193", "f09f9b91", "f09fa58b", "f09fa697", "f09f8c95", "f09f8fb9", "f09f8c9c", "f09f8db2", "e29c96", "f09fa598", "f09f8da5", "e29bbd", "f09f908f", "f09f8dae", "f09fa588", "f09fa5a7", "f09fa79be2808de29980", "f09fa79be2808de29980efb88f", "f09f9292", "e29b94", "f09f949c", "e29d94", "f09f8f89", "f09f8e96", "f09f8f84e2808de29980", "f09f8f84e2808de29980efb88f", "f09f998de2808de29982", "f09f998de2808de29982efb88f", "f09fa59f", "f09f97bf", "f09f8f82", "f09f8f82f09f8fbb", "f09f8f82f09f8fbc", "f09f8f82f09f8fbd", "f09f8f82f09f8fbe", "f09f8f82f09f8fbf", "c2ae", "f09f939d", "f09f8e97", "f09f9b8c", "f09f9b8cf09f8fbb", "f09f9b8cf09f8fbc", "f09f9b8cf09f8fbd", "f09f9b8cf09f8fbe", "f09f9b8cf09f8fbf", "f09f9ba9", "f09f9aa9", "f09f8e8e", "e28fb3", "f09f90a1", "f09f8ca1", "f09f95b3", "f09f8d9b", "f09fa692", "f09fa79be2808de29982", "f09fa79be2808de29982efb88f", "f09fa799e2808de29980", "f09fa799e2808de29980efb88f", "f09fa5aa", "f09f9082", "f09f90ab", "f09f8eb3", "f09f9a92", "f09f9791", "f09f9181e2808df09f97a8", "f09f9181efb88fe2808df09f97a8efb88f", "f09f9aa3e2808de29982", "f09f9aa3e2808de29982efb88f", "f09f9085", "f09f8e9f", "f09fa7a2", "f09fa79ee2808de29982", "f09fa79ee2808de29982efb88f", "f09f8f92", "e29c9d", "e28fb1", "e29d95", "f09f8e8d", "f09f8f93", "f09f919e", "f09f90aa", "f09fa585", "f09f93a3", "f09f9497", "e299bb", "f09f9a82", "f09f9a8c", "f09f9a91", "f09fa584", "f09fa5a1", "f09f92b4", "f09f8eb2", "f09f919c", "f09f9192", "f09f8c84", "f09f94b9", "f09f9086", "e299a3", "f09f97af", "f09fa799e2808de29982", "f09fa799e2808de29982efb88f", "f09fa5a3", "f09fa793", "f09fa5a2", "f09f9195", "f09f9a95", "e29bb5", "f09f97bb", "e29882", "f09f8d99", "f09f919b", "f09f91a2", "f09f8e9b", "f09fa4ba", "f09fa792", "e29bb8", "f09f9083", "e29b91", "f09f9aae", "f09f8ea1", "f09f91b2", "e29eb0", "f09f8e9e", "f09f838f", "f09f91b3e2808de29980", "f09f91b3e2808de29980efb88f", "f09fa7a4", "f09f9499", "f09f9396", "f09f9ab2", "f09f958b", "f09f8e9a", "f09f8e92", "f09f9b81", "f09f8692", "f09f9bb5", "f09f9494", "f09f9486", "f09f95b9", "e296aa", "f09f9a94", "f09f8c82", "c2a9", "f09f919a", "f09f8fb0", "f09f8db6", "f09fa68f", "f09fa79de2808de29982", "f09fa79de2808de29982efb88f", "f09fa693", "f09fa5ab", "f09f8fa5", "f09f8c83", "f09f948b", "f09f9a93", "f09f9194", "f09f8fb3", "e29c8f", "e28c9a", "f09f8e8f", "f09f8c90", "f09f8ebf", "f09f8ea2", "f09f8697", "f09f8f8ce2808de29980", "f09f8f8cefb88fe2808de29980efb88f", "f09f979d", "f09f8da2", "f09f9081", "f09f94b1", "f09f91a1", "f09f8e8b", "f09f9ab5e2808de29982", "f09f9ab5e2808de29982efb88f", "e29b93", "e2998b", "e2ac9b", "f09f8eaa", "f09fa589", "f09f9aa3e2808de29980", "f09f9aa3e2808de29980efb88f", "f09fa798e2808de29982", "f09fa798e2808de29982efb88f", "f09fa5a0", "f09f939b", "f09f9a81", "f09f91a5", "f09f96a5", "f09f94b8", "f09f93a6", "f09f9a9a", "f09f85b0", "f09fa7a3", "f09f9bb8", "f09f8f94", "e29bb0", "e29bba", "f09f8d98", "e29baa", "f09f8fa9", "f09f91a4", "f09f9288", "f09f9493", "f09f869a", "f09f8f8f", "f09f94ba", "f09f968c", "f09f8eb0", "f09f9bb3", "f09f93bf", "f09fa791", "f09f97ba", "f09f9ba5", "f09f9a9c", "f09f92a2", "f09f8ea0", "f09f92a0", "f09f8fb8", "f09f8fa2", "f09f92bc", "e2ac9c", "f09f97bc", "f09f968d", "f09f93ba", "f09f8fb4", "e29a97", "f09f8c92", "f09f958c", "f09f9aa4", "f09f9a90", "e28c9b", "f09f949a", "f09f8c98", "f09f8f91", "f09fa4bce2808de29982", "f09fa4bce2808de29982efb88f", "f09fa4bcf09f8fbbe2808de29982", "f09fa4bcf09f8fbbe2808de29982efb88f", "f09fa4bcf09f8fbce2808de29982", "f09fa4bcf09f8fbce2808de29982efb88f", "f09fa4bcf09f8fbde2808de29982", "f09fa4bcf09f8fbde2808de29982efb88f", "f09fa4bcf09f8fbee2808de29982", "f09fa4bcf09f8fbee2808de29982efb88f", "f09fa4bcf09f8fbfe2808de29982", "f09fa4bcf09f8fbfe2808de29982efb88f", "f09fa4bee2808de29982", "f09fa4bee2808de29982efb88f", "f09f949b", "e2ac85", "f09f8fb5", "e298af", "f09f8c87", "f09f9198", "f09f8f95", "f09f8fae", "e297bc", "e299a8", "f09fa4bee2808de29980", "f09fa4bee2808de29980efb88f", "f09fa7a6", "f09f8c97", "f09f9b8f", "f09f8c94", "f09f8c93", "f09f8fa7", "f09f9ba1", "e29b8f", "f09f8e90", "f09f9ba0", "f09f9a9b", "f09f948f", "f09f8e91", "f09f95b0", "f09f92bf", "f09f8c96", "f09f94a6", "f09f9bb4", "f09f9ab5e2808de29980", "f09f9ab5e2808de29980efb88f", "f09fa58c", "f09fa7a5", "f09f94b7", "f09f8ebd", "e298ae", "f09f9aa6", "f09f8e8c", "f09f9a96", "e29382", "f09f8f99", "e296ab", "f09f8f9a", "f09f92b3", "f09fa4bde2808de29982", "f09fa4bde2808de29982efb88f", "f09f92b1", "e29ba9", "f09f94b6", "e380bd", "f09f8c86", "f09f9abc", "f09f92ba", "e29bb2", "e29ebf", "f09f9aa2", "f09f92ae", "f09f9aaa", "f09f919d", "e29a92", "f09f9bb6", "f09fa4b9e2808de29980", "f09fa4b9e2808de29980efb88f", "f09fa79de2808de29980", "f09fa79de2808de29980efb88f", "f09fa797e2808de29980", "f09fa797e2808de29980efb88f", "f09f94a9", "f09f93b9", "f09f94bb", "f09f94a7", "f09f8699", "f09f8f9c", "f09f958d", "e299bf", "f09f8f9f", "e29a99", "f09f8f9e", "f09f9380", "f09f9589", "f09f93a9", "f09f8faf", "f09fa4b9e2808de29982", "f09fa4b9e2808de29982efb88f", "f09f8f9b", "f09f9a8d", "f09f9395", "f09f94b0", "f09f9ba3", "f09f9393", "f09f8c81", "f09f8f98", "f09f8c89", "f09f85be", "f09f8fab", "f09f949f", "f09f93b5", "e29a96", "f09f9485", "f09f8fa6", "f09fa4bde2808de29980", "f09fa4bde2808de29980efb88f", "f09f9b92", "f09fa797e2808de29982", "f09fa797e2808de29982efb88f", "f09f8fba", "f09f9a8e", "f09f8fa8", "e28ca8", "e296b6", "f09f9a83", "e29bb4", "f09f96b1", "f09f9a84", "f09f948d", "f09f8fac", "f09f85bf", "f09f8695", "e297be", "e29992", "f09f9bb0", "f09f8084", "e2a4b5", "f09f93a1", "e29c89", "e2998c", "f09f9aba", "e2998f", "e28fb2", "f09f948e", "f09f968a", "e297bb", "e29d8e", "e29ab1", "f09f9ab8", "f09f9aa7", "f09f94b3", "f09f96bc", "e29ca1", "f09f8693", "f09f9ba4", "f09f9386", "f09f9397", "f09f9a85", "f09f9388", "f09f9b8b", "f09f9498", "e29cb3", "e29e97", "f09f9a8b", "f09f9b8e", "f09f8eb4", "f09f9489", "f09f9398", "f09f9392", "f09f94bd", "f09f9a8a", "f09f9481", "f09f8eab", "f09f93ac", "f09f9488", "e2998a", "f09f9495", "f09f8fa4", "f09f9385", "f09f8694", "e29988", "f09f97be", "e298aa", "f09f9a9e", "f09f9487", "f09f9aad", "f09f9a86", "f09f8faa", "e28fa9", "f09f93b0", "f09f94ac", "f09f94ad", "f09f93ae", "f09f968b", "f09f9b82", "e29993", "f09f9a9d", "e29990", "f09f9aa5", "f09f979e", "f09f9484", "f09f8990", "e29991", "f09f9ab0", "f09f93a5", "e297bd", "f09f88b5", "f09f9a87", "e298a2", "f09f8fad", "e2998e", "f09f9a89", "e29d87", "f09f9592", "e29989", "e2998d", "e28698", "f09f93bb", "f09f9ab1", "f09f9a88", "f09f9399", "f09f93a7", "f09f94bc", "f09f88b2", "f09f94af", "f09f8f97", "f09f9ab7", "e28697", "f09f93b6", "f09f8691", "f09f9591", "f09f938e", "f09f96b2", "f09f9b83", "f09f9ab9", "e29c92", "f09f96a8", "f09f8fa3", "f09f8696", "f09f9ba2", "e28695", "f09f9bb7", "f09f9384", "f09f9793", "f09f979c", "f09f9593", "f09f93a0", "f09f9595", "f09f9389", "f09f9483", "f09f9b90", "f09f938a", "f09f939c", "f09f9b84", "f09f9394", "f09f959b", "f09f938b", "f09f868e", "f09f9596", "f09f9599", "f09f939f", "e38a97", "f09f9381", "f09f938f", "f09f9aa1", "f09f93af", "f09f958e", "f09f93ab", "f09f9598", "e29cb4", "e298a3", "f09f88b9", "f09f9590", "f09f93b4", "f09f92bd", "f09f9aaf", "f09f93aa", "f09f9abe", "f09f9390", "e38a99", "f09f9792", "f09f92be", "e2a4b4", "f09f9597", "f09f9387", "f09f9480", "f09f9383", "f09f9b85", "f09f9aa0", "f09f9594", "e28fba", "e29780", "f09f9391", "f09f93a4", "e28699", "f09f959a", "f09f9a8f", "f09f9a9f", "f09f93b3", "e29a9b", "e28faa", "e28fac", "f09f88b6", "f09f93bc", "f09f959f", "f09f93ad", "f09f93a8", "f09f959e", "f09f9782", "f09f95a1", "f09f9ab3", "e28696", "f09f959d", "f09f95a0", "f09f9382", "f09f9784", "f09f88b4", "f09f9abb", "f09f889a", "f09f88b3", "e28fb8", "f09f95a7", "e298a6", "f09f8fb7", "f09f9482", "f09f959c", "f09f9496", "e284b9", "f09f95a5", "e28fb9", "f09f95a2", "f09f88af", "f09f9783", "f09f97b3", "f09f8882", "e286a9", "f09f95a4", "e28fad", "f09f88ba", "f09f95a6", "e28694", "f09f88b8", "f09f94a4", "e28faf", "e29b8e", "f09f95a3", "f09f92b9", "f09f88b7", "e28fab", "e286aa", "f09f8991", "e298b8", "e28fae", "f09f94a0", "f09f8ea6", "f09f94a1", "f09f94a2", "f09f94a3", "f09f8881", "f09fa5b0", "f09fa5b5", "f09fa5b6", "f09fa5b3", "f09fa5b4", "f09fa5ba", "f09f91b6f09f8fbb", "f09f91b6f09f8fbc", "f09f91b6f09f8fbd", "f09f91b6f09f8fbe", "f09f91b6f09f8fbf", "f09fa792f09f8fbb", "f09fa792f09f8fbc", "f09fa792f09f8fbd", "f09fa792f09f8fbe", "f09fa792f09f8fbf", "f09f91a6f09f8fbb", "f09f91a6f09f8fbc", "f09f91a6f09f8fbd", "f09f91a6f09f8fbe", "f09f91a6f09f8fbf", "f09f91a7f09f8fbb", "f09f91a7f09f8fbc", "f09f91a7f09f8fbd", "f09f91a7f09f8fbe", "f09f91a7f09f8fbf", "f09fa791f09f8fbb", "f09fa791f09f8fbc", "f09fa791f09f8fbd", "f09fa791f09f8fbe", "f09fa791f09f8fbf", "f09f91a8f09f8fbb", "f09f91a8f09f8fbc", "f09f91a8f09f8fbd", "f09f91a8f09f8fbe", "f09f91a8f09f8fbf", "f09f91a9f09f8fbb", "f09f91a9f09f8fbc", "f09f91a9f09f8fbd", "f09f91a9f09f8fbe", "f09f91a9f09f8fbf", "f09fa793f09f8fbb", "f09fa793f09f8fbc", "f09fa793f09f8fbd", "f09fa793f09f8fbe", "f09fa793f09f8fbf", "f09f91b4f09f8fbb", "f09f91b4f09f8fbc", "f09f91b4f09f8fbd", "f09f91b4f09f8fbe", "f09f91b4f09f8fbf", "f09f91b5f09f8fbb", "f09f91b5f09f8fbc", "f09f91b5f09f8fbd", "f09f91b5f09f8fbe", "f09f91b5f09f8fbf", "f09f91a8e2808de29a95", "f09f91a8f09f8fbbe2808de29a95", "f09f91a8f09f8fbce2808de29a95", "f09f91a8f09f8fbde2808de29a95", "f09f91a8f09f8fbee2808de29a95", "f09f91a8f09f8fbfe2808de29a95", "f09f91a9e2808de29a95", "f09f91a9f09f8fbbe2808de29a95", "f09f91a9f09f8fbce2808de29a95", "f09f91a9f09f8fbde2808de29a95", "f09f91a9f09f8fbee2808de29a95", "f09f91a9f09f8fbfe2808de29a95", "f09f91a8e2808df09f8e93", "f09f91a8f09f8fbbe2808df09f8e93", "f09f91a8f09f8fbce2808df09f8e93", "f09f91a8f09f8fbde2808df09f8e93", "f09f91a8f09f8fbee2808df09f8e93", "f09f91a8f09f8fbfe2808df09f8e93", "f09f91a9e2808df09f8e93", "f09f91a9f09f8fbbe2808df09f8e93", "f09f91a9f09f8fbce2808df09f8e93", "f09f91a9f09f8fbde2808df09f8e93", "f09f91a9f09f8fbee2808df09f8e93", "f09f91a9f09f8fbfe2808df09f8e93", "f09f91a8e2808df09f8fab", "f09f91a8f09f8fbbe2808df09f8fab", "f09f91a8f09f8fbce2808df09f8fab", "f09f91a8f09f8fbde2808df09f8fab", "f09f91a8f09f8fbee2808df09f8fab", "f09f91a8f09f8fbfe2808df09f8fab", "f09f91a9e2808df09f8fab", "f09f91a9f09f8fbbe2808df09f8fab", "f09f91a9f09f8fbce2808df09f8fab", "f09f91a9f09f8fbde2808df09f8fab", "f09f91a9f09f8fbee2808df09f8fab", "f09f91a9f09f8fbfe2808df09f8fab", "f09f91a8e2808de29a96", "f09f91a8f09f8fbbe2808de29a96", "f09f91a8f09f8fbce2808de29a96", "f09f91a8f09f8fbde2808de29a96", "f09f91a8f09f8fbee2808de29a96", "f09f91a8f09f8fbfe2808de29a96", "f09f91a9e2808de29a96", "f09f91a9f09f8fbbe2808de29a96", "f09f91a9f09f8fbce2808de29a96", "f09f91a9f09f8fbde2808de29a96", "f09f91a9f09f8fbee2808de29a96", "f09f91a9f09f8fbfe2808de29a96", "f09f91a8e2808df09f8cbe", "f09f91a8f09f8fbbe2808df09f8cbe", "f09f91a8f09f8fbce2808df09f8cbe", "f09f91a8f09f8fbde2808df09f8cbe", "f09f91a8f09f8fbee2808df09f8cbe", "f09f91a8f09f8fbfe2808df09f8cbe", "f09f91a9e2808df09f8cbe", "f09f91a9f09f8fbbe2808df09f8cbe", "f09f91a9f09f8fbce2808df09f8cbe", "f09f91a9f09f8fbde2808df09f8cbe", "f09f91a9f09f8fbee2808df09f8cbe", "f09f91a9f09f8fbfe2808df09f8cbe", "f09f91a8e2808df09f8db3", "f09f91a8f09f8fbbe2808df09f8db3", "f09f91a8f09f8fbce2808df09f8db3", "f09f91a8f09f8fbde2808df09f8db3", "f09f91a8f09f8fbee2808df09f8db3", "f09f91a8f09f8fbfe2808df09f8db3", "f09f91a9e2808df09f8db3", "f09f91a9f09f8fbbe2808df09f8db3", "f09f91a9f09f8fbce2808df09f8db3", "f09f91a9f09f8fbde2808df09f8db3", "f09f91a9f09f8fbee2808df09f8db3", "f09f91a9f09f8fbfe2808df09f8db3", "f09f91a8e2808df09f94a7", "f09f91a8f09f8fbbe2808df09f94a7", "f09f91a8f09f8fbce2808df09f94a7", "f09f91a8f09f8fbde2808df09f94a7", "f09f91a8f09f8fbee2808df09f94a7", "f09f91a8f09f8fbfe2808df09f94a7", "f09f91a9e2808df09f94a7", "f09f91a9f09f8fbbe2808df09f94a7", "f09f91a9f09f8fbce2808df09f94a7", "f09f91a9f09f8fbde2808df09f94a7", "f09f91a9f09f8fbee2808df09f94a7", "f09f91a9f09f8fbfe2808df09f94a7", "f09f91a8e2808df09f8fad", "f09f91a8f09f8fbbe2808df09f8fad", "f09f91a8f09f8fbce2808df09f8fad", "f09f91a8f09f8fbde2808df09f8fad", "f09f91a8f09f8fbee2808df09f8fad", "f09f91a8f09f8fbfe2808df09f8fad", "f09f91a9e2808df09f8fad", "f09f91a9f09f8fbbe2808df09f8fad", "f09f91a9f09f8fbce2808df09f8fad", "f09f91a9f09f8fbde2808df09f8fad", "f09f91a9f09f8fbee2808df09f8fad", "f09f91a9f09f8fbfe2808df09f8fad", "f09f91a8e2808df09f92bc", "f09f91a8f09f8fbbe2808df09f92bc", "f09f91a8f09f8fbce2808df09f92bc", "f09f91a8f09f8fbde2808df09f92bc", "f09f91a8f09f8fbee2808df09f92bc", "f09f91a8f09f8fbfe2808df09f92bc", "f09f91a9e2808df09f92bc", "f09f91a9f09f8fbbe2808df09f92bc", "f09f91a9f09f8fbce2808df09f92bc", "f09f91a9f09f8fbde2808df09f92bc", "f09f91a9f09f8fbee2808df09f92bc", "f09f91a9f09f8fbfe2808df09f92bc", "f09f91a8e2808df09f94ac", "f09f91a8f09f8fbbe2808df09f94ac", "f09f91a8f09f8fbce2808df09f94ac", "f09f91a8f09f8fbde2808df09f94ac", "f09f91a8f09f8fbee2808df09f94ac", "f09f91a8f09f8fbfe2808df09f94ac", "f09f91a9e2808df09f94ac", "f09f91a9f09f8fbbe2808df09f94ac", "f09f91a9f09f8fbce2808df09f94ac", "f09f91a9f09f8fbde2808df09f94ac", "f09f91a9f09f8fbee2808df09f94ac", "f09f91a9f09f8fbfe2808df09f94ac", "f09f91a8e2808df09f92bb", "f09f91a8f09f8fbbe2808df09f92bb", "f09f91a8f09f8fbce2808df09f92bb", "f09f91a8f09f8fbde2808df09f92bb", "f09f91a8f09f8fbee2808df09f92bb", "f09f91a8f09f8fbfe2808df09f92bb", "f09f91a9e2808df09f92bb", "f09f91a9f09f8fbbe2808df09f92bb", "f09f91a9f09f8fbce2808df09f92bb", "f09f91a9f09f8fbde2808df09f92bb", "f09f91a9f09f8fbee2808df09f92bb", "f09f91a9f09f8fbfe2808df09f92bb", "f09f91a8e2808df09f8ea4", "f09f91a8f09f8fbbe2808df09f8ea4", "f09f91a8f09f8fbce2808df09f8ea4", "f09f91a8f09f8fbde2808df09f8ea4", "f09f91a8f09f8fbee2808df09f8ea4", "f09f91a8f09f8fbfe2808df09f8ea4", "f09f91a9e2808df09f8ea4", "f09f91a9f09f8fbbe2808df09f8ea4", "f09f91a9f09f8fbce2808df09f8ea4", "f09f91a9f09f8fbde2808df09f8ea4", "f09f91a9f09f8fbee2808df09f8ea4", "f09f91a9f09f8fbfe2808df09f8ea4", "f09f91a8e2808df09f8ea8", "f09f91a8f09f8fbbe2808df09f8ea8", "f09f91a8f09f8fbce2808df09f8ea8", "f09f91a8f09f8fbde2808df09f8ea8", "f09f91a8f09f8fbee2808df09f8ea8", "f09f91a8f09f8fbfe2808df09f8ea8", "f09f91a9e2808df09f8ea8", "f09f91a9f09f8fbbe2808df09f8ea8", "f09f91a9f09f8fbce2808df09f8ea8", "f09f91a9f09f8fbde2808df09f8ea8", "f09f91a9f09f8fbee2808df09f8ea8", "f09f91a9f09f8fbfe2808df09f8ea8", "f09f91a8e2808de29c88", "f09f91a8e2808de29c88efb88f", "f09f91a8f09f8fbbe2808de29c88", "f09f91a8f09f8fbbe2808de29c88efb88f", "f09f91a8f09f8fbce2808de29c88", "f09f91a8f09f8fbce2808de29c88efb88f", "f09f91a8f09f8fbde2808de29c88", "f09f91a8f09f8fbde2808de29c88efb88f", "f09f91a8f09f8fbee2808de29c88", "f09f91a8f09f8fbee2808de29c88efb88f", "f09f91a8f09f8fbfe2808de29c88", "f09f91a8f09f8fbfe2808de29c88efb88f", "f09f91a9e2808de29c88", "f09f91a9e2808de29c88efb88f", "f09f91a9f09f8fbbe2808de29c88", "f09f91a9f09f8fbbe2808de29c88efb88f", "f09f91a9f09f8fbce2808de29c88", "f09f91a9f09f8fbce2808de29c88efb88f", "f09f91a9f09f8fbde2808de29c88", "f09f91a9f09f8fbde2808de29c88efb88f", "f09f91a9f09f8fbee2808de29c88", "f09f91a9f09f8fbee2808de29c88efb88f", "f09f91a9f09f8fbfe2808de29c88", "f09f91a9f09f8fbfe2808de29c88efb88f", "f09f91a8e2808df09f9a80", "f09f91a8f09f8fbbe2808df09f9a80", "f09f91a8f09f8fbce2808df09f9a80", "f09f91a8f09f8fbde2808df09f9a80", "f09f91a8f09f8fbee2808df09f9a80", "f09f91a8f09f8fbfe2808df09f9a80", "f09f91a9e2808df09f9a80", "f09f91a9f09f8fbbe2808df09f9a80", "f09f91a9f09f8fbce2808df09f9a80", "f09f91a9f09f8fbde2808df09f9a80", "f09f91a9f09f8fbee2808df09f9a80", "f09f91a9f09f8fbfe2808df09f9a80", "f09f91a8e2808df09f9a92", "f09f91a8f09f8fbbe2808df09f9a92", "f09f91a8f09f8fbce2808df09f9a92", "f09f91a8f09f8fbde2808df09f9a92", "f09f91a8f09f8fbee2808df09f9a92", "f09f91a8f09f8fbfe2808df09f9a92", "f09f91a9e2808df09f9a92", "f09f91a9f09f8fbbe2808df09f9a92", "f09f91a9f09f8fbce2808df09f9a92", "f09f91a9f09f8fbde2808df09f9a92", "f09f91a9f09f8fbee2808df09f9a92", "f09f91a9f09f8fbfe2808df09f9a92", "f09f91ae", "f09f91aef09f8fbb", "f09f91aef09f8fbc", "f09f91aef09f8fbd", "f09f91aef09f8fbe", "f09f91aef09f8fbf", "f09f91aee2808de29982", "f09f91aee2808de29982efb88f", "f09f91aef09f8fbbe2808de29982", "f09f91aef09f8fbbe2808de29982efb88f", "f09f91aef09f8fbce2808de29982", "f09f91aef09f8fbce2808de29982efb88f", "f09f91aef09f8fbde2808de29982", "f09f91aef09f8fbde2808de29982efb88f", "f09f91aef09f8fbee2808de29982", "f09f91aef09f8fbee2808de29982efb88f", "f09f91aef09f8fbfe2808de29982", "f09f91aef09f8fbfe2808de29982efb88f", "f09f91aee2808de29980", "f09f91aee2808de29980efb88f", "f09f91aef09f8fbbe2808de29980", "f09f91aef09f8fbbe2808de29980efb88f", "f09f91aef09f8fbce2808de29980", "f09f91aef09f8fbce2808de29980efb88f", "f09f91aef09f8fbde2808de29980", "f09f91aef09f8fbde2808de29980efb88f", "f09f91aef09f8fbee2808de29980", "f09f91aef09f8fbee2808de29980efb88f", "f09f91aef09f8fbfe2808de29980", "f09f91aef09f8fbfe2808de29980efb88f", "f09f95b5", "f09f95b5efb88ff09f8fbb", "f09f95b5f09f8fbb", "f09f95b5efb88ff09f8fbc", "f09f95b5f09f8fbc", "f09f95b5efb88ff09f8fbd", "f09f95b5f09f8fbd", "f09f95b5efb88ff09f8fbe", "f09f95b5f09f8fbe", "f09f95b5efb88ff09f8fbf", "f09f95b5f09f8fbf", "f09f95b5e2808de29982", "f09f95b5efb88fe2808de29982efb88f", "f09f95b5efb88ff09f8fbbe2808de29982efb88f", "f09f95b5f09f8fbbe2808de29982", "f09f95b5efb88ff09f8fbce2808de29982efb88f", "f09f95b5f09f8fbce2808de29982", "f09f95b5efb88ff09f8fbde2808de29982efb88f", "f09f95b5f09f8fbde2808de29982", "f09f95b5efb88ff09f8fbee2808de29982efb88f", "f09f95b5f09f8fbee2808de29982", "f09f95b5efb88ff09f8fbfe2808de29982efb88f", "f09f95b5f09f8fbfe2808de29982", "f09f95b5e2808de29980", "f09f95b5efb88fe2808de29980efb88f", "f09f95b5efb88ff09f8fbbe2808de29980efb88f", "f09f95b5f09f8fbbe2808de29980", "f09f95b5efb88ff09f8fbce2808de29980efb88f", "f09f95b5f09f8fbce2808de29980", "f09f95b5efb88ff09f8fbde2808de29980efb88f", "f09f95b5f09f8fbde2808de29980", "f09f95b5efb88ff09f8fbee2808de29980efb88f", "f09f95b5f09f8fbee2808de29980", "f09f95b5efb88ff09f8fbfe2808de29980efb88f", "f09f95b5f09f8fbfe2808de29980", "f09f9282", "f09f9282f09f8fbb", "f09f9282f09f8fbc", "f09f9282f09f8fbd", "f09f9282f09f8fbe", "f09f9282f09f8fbf", "f09f9282e2808de29982", "f09f9282e2808de29982efb88f", "f09f9282f09f8fbbe2808de29982", "f09f9282f09f8fbbe2808de29982efb88f", "f09f9282f09f8fbce2808de29982", "f09f9282f09f8fbce2808de29982efb88f", "f09f9282f09f8fbde2808de29982", "f09f9282f09f8fbde2808de29982efb88f", "f09f9282f09f8fbee2808de29982", "f09f9282f09f8fbee2808de29982efb88f", "f09f9282f09f8fbfe2808de29982", "f09f9282f09f8fbfe2808de29982efb88f", "f09f9282e2808de29980", "f09f9282e2808de29980efb88f", "f09f9282f09f8fbbe2808de29980", "f09f9282f09f8fbbe2808de29980efb88f", "f09f9282f09f8fbce2808de29980", "f09f9282f09f8fbce2808de29980efb88f", "f09f9282f09f8fbde2808de29980", "f09f9282f09f8fbde2808de29980efb88f", "f09f9282f09f8fbee2808de29980", "f09f9282f09f8fbee2808de29980efb88f", "f09f9282f09f8fbfe2808de29980", "f09f9282f09f8fbfe2808de29980efb88f", "f09f91b7", "f09f91b7f09f8fbb", "f09f91b7f09f8fbc", "f09f91b7f09f8fbd", "f09f91b7f09f8fbe", "f09f91b7f09f8fbf", "f09f91b7e2808de29982", "f09f91b7e2808de29982efb88f", "f09f91b7f09f8fbbe2808de29982", "f09f91b7f09f8fbbe2808de29982efb88f", "f09f91b7f09f8fbce2808de29982", "f09f91b7f09f8fbce2808de29982efb88f", "f09f91b7f09f8fbde2808de29982", "f09f91b7f09f8fbde2808de29982efb88f", "f09f91b7f09f8fbee2808de29982", "f09f91b7f09f8fbee2808de29982efb88f", "f09f91b7f09f8fbfe2808de29982", "f09f91b7f09f8fbfe2808de29982efb88f", "f09f91b7e2808de29980", "f09f91b7e2808de29980efb88f", "f09f91b7f09f8fbbe2808de29980", "f09f91b7f09f8fbbe2808de29980efb88f", "f09f91b7f09f8fbce2808de29980", "f09f91b7f09f8fbce2808de29980efb88f", "f09f91b7f09f8fbde2808de29980", "f09f91b7f09f8fbde2808de29980efb88f", "f09f91b7f09f8fbee2808de29980", "f09f91b7f09f8fbee2808de29980efb88f", "f09f91b7f09f8fbfe2808de29980", "f09f91b7f09f8fbfe2808de29980efb88f", "f09fa4b4f09f8fbb", "f09fa4b4f09f8fbc", "f09fa4b4f09f8fbd", "f09fa4b4f09f8fbe", "f09fa4b4f09f8fbf", "f09f91b8f09f8fbb", "f09f91b8f09f8fbc", "f09f91b8f09f8fbd", "f09f91b8f09f8fbe", "f09f91b8f09f8fbf", "f09f91b3", "f09f91b3f09f8fbb", "f09f91b3f09f8fbc", "f09f91b3f09f8fbd", "f09f91b3f09f8fbe", "f09f91b3f09f8fbf", "f09f91b3f09f8fbbe2808de29982", "f09f91b3f09f8fbbe2808de29982efb88f", "f09f91b3f09f8fbce2808de29982", "f09f91b3f09f8fbce2808de29982efb88f", "f09f91b3f09f8fbde2808de29982", "f09f91b3f09f8fbde2808de29982efb88f", "f09f91b3f09f8fbee2808de29982", "f09f91b3f09f8fbee2808de29982efb88f", "f09f91b3f09f8fbfe2808de29982", "f09f91b3f09f8fbfe2808de29982efb88f", "f09f91b3f09f8fbbe2808de29980", "f09f91b3f09f8fbbe2808de29980efb88f", "f09f91b3f09f8fbce2808de29980", "f09f91b3f09f8fbce2808de29980efb88f", "f09f91b3f09f8fbde2808de29980", "f09f91b3f09f8fbde2808de29980efb88f", "f09f91b3f09f8fbee2808de29980", "f09f91b3f09f8fbee2808de29980efb88f", "f09f91b3f09f8fbfe2808de29980", "f09f91b3f09f8fbfe2808de29980efb88f", "f09f91b2f09f8fbb", "f09f91b2f09f8fbc", "f09f91b2f09f8fbd", "f09f91b2f09f8fbe", "f09f91b2f09f8fbf", "f09fa795f09f8fbb", "f09fa795f09f8fbc", "f09fa795f09f8fbd", "f09fa795f09f8fbe", "f09fa795f09f8fbf", "f09fa794f09f8fbb", "f09fa794f09f8fbc", "f09fa794f09f8fbd", "f09fa794f09f8fbe", "f09fa794f09f8fbf", "f09f91b1", "f09f91b1f09f8fbb", "f09f91b1f09f8fbc", "f09f91b1f09f8fbd", "f09f91b1f09f8fbe", "f09f91b1f09f8fbf", "f09f91b1e2808de29982", "f09f91b1e2808de29982efb88f", "f09f91b1f09f8fbbe2808de29982", "f09f91b1f09f8fbbe2808de29982efb88f", "f09f91b1f09f8fbce2808de29982", "f09f91b1f09f8fbce2808de29982efb88f", "f09f91b1f09f8fbde2808de29982", "f09f91b1f09f8fbde2808de29982efb88f", "f09f91b1f09f8fbee2808de29982", "f09f91b1f09f8fbee2808de29982efb88f", "f09f91b1f09f8fbfe2808de29982", "f09f91b1f09f8fbfe2808de29982efb88f", "f09f91b1e2808de29980", "f09f91b1e2808de29980efb88f", "f09f91b1f09f8fbbe2808de29980", "f09f91b1f09f8fbbe2808de29980efb88f", "f09f91b1f09f8fbce2808de29980", "f09f91b1f09f8fbce2808de29980efb88f", "f09f91b1f09f8fbde2808de29980", "f09f91b1f09f8fbde2808de29980efb88f", "f09f91b1f09f8fbee2808de29980", "f09f91b1f09f8fbee2808de29980efb88f", "f09f91b1f09f8fbfe2808de29980", "f09f91b1f09f8fbfe2808de29980efb88f", "f09f91a8e2808df09fa6b0", "f09f91a8f09f8fbbe2808df09fa6b0", "f09f91a8f09f8fbce2808df09fa6b0", "f09f91a8f09f8fbde2808df09fa6b0", "f09f91a8f09f8fbee2808df09fa6b0", "f09f91a8f09f8fbfe2808df09fa6b0", "f09f91a9e2808df09fa6b0", "f09f91a9f09f8fbbe2808df09fa6b0", "f09f91a9f09f8fbce2808df09fa6b0", "f09f91a9f09f8fbde2808df09fa6b0", "f09f91a9f09f8fbee2808df09fa6b0", "f09f91a9f09f8fbfe2808df09fa6b0", "f09f91a8e2808df09fa6b1", "f09f91a8f09f8fbbe2808df09fa6b1", "f09f91a8f09f8fbce2808df09fa6b1", "f09f91a8f09f8fbde2808df09fa6b1", "f09f91a8f09f8fbee2808df09fa6b1", "f09f91a8f09f8fbfe2808df09fa6b1", "f09f91a9e2808df09fa6b1", "f09f91a9f09f8fbbe2808df09fa6b1", "f09f91a9f09f8fbce2808df09fa6b1", "f09f91a9f09f8fbde2808df09fa6b1", "f09f91a9f09f8fbee2808df09fa6b1", "f09f91a9f09f8fbfe2808df09fa6b1", "f09f91a8e2808df09fa6b2", "f09f91a8f09f8fbbe2808df09fa6b2", "f09f91a8f09f8fbce2808df09fa6b2", "f09f91a8f09f8fbde2808df09fa6b2", "f09f91a8f09f8fbee2808df09fa6b2", "f09f91a8f09f8fbfe2808df09fa6b2", "f09f91a9e2808df09fa6b2", "f09f91a9f09f8fbbe2808df09fa6b2", "f09f91a9f09f8fbce2808df09fa6b2", "f09f91a9f09f8fbde2808df09fa6b2", "f09f91a9f09f8fbee2808df09fa6b2", "f09f91a9f09f8fbfe2808df09fa6b2", "f09f91a8e2808df09fa6b3", "f09f91a8f09f8fbbe2808df09fa6b3", "f09f91a8f09f8fbce2808df09fa6b3", "f09f91a8f09f8fbde2808df09fa6b3", "f09f91a8f09f8fbee2808df09fa6b3", "f09f91a8f09f8fbfe2808df09fa6b3", "f09f91a9e2808df09fa6b3", "f09f91a9f09f8fbbe2808df09fa6b3", "f09f91a9f09f8fbce2808df09fa6b3", "f09f91a9f09f8fbde2808df09fa6b3", "f09f91a9f09f8fbee2808df09fa6b3", "f09f91a9f09f8fbfe2808df09fa6b3", "f09fa4b5f09f8fbb", "f09fa4b5f09f8fbc", "f09fa4b5f09f8fbd", "f09fa4b5f09f8fbe", "f09fa4b5f09f8fbf", "f09f91b0f09f8fbb", "f09f91b0f09f8fbc", "f09f91b0f09f8fbd", "f09f91b0f09f8fbe", "f09f91b0f09f8fbf", "f09fa4b0f09f8fbb", "f09fa4b0f09f8fbc", "f09fa4b0f09f8fbd", "f09fa4b0f09f8fbe", "f09fa4b0f09f8fbf", "f09fa4b1f09f8fbb", "f09fa4b1f09f8fbc", "f09fa4b1f09f8fbd", "f09fa4b1f09f8fbe", "f09fa4b1f09f8fbf", "f09f91bcf09f8fbb", "f09f91bcf09f8fbc", "f09f91bcf09f8fbd", "f09f91bcf09f8fbe", "f09f91bcf09f8fbf", "f09f8e85f09f8fbb", "f09f8e85f09f8fbc", "f09f8e85f09f8fbd", "f09f8e85f09f8fbe", "f09f8e85f09f8fbf", "f09fa4b6f09f8fbb", "f09fa4b6f09f8fbc", "f09fa4b6f09f8fbd", "f09fa4b6f09f8fbe", "f09fa4b6f09f8fbf", "f09fa6b8", "f09fa6b8f09f8fbb", "f09fa6b8f09f8fbc", "f09fa6b8f09f8fbd", "f09fa6b8f09f8fbe", "f09fa6b8f09f8fbf", "f09fa6b8e2808de29980", "f09fa6b8e2808de29980efb88f", "f09fa6b8f09f8fbbe2808de29980", "f09fa6b8f09f8fbbe2808de29980efb88f", "f09fa6b8f09f8fbce2808de29980", "f09fa6b8f09f8fbce2808de29980efb88f", "f09fa6b8f09f8fbde2808de29980", "f09fa6b8f09f8fbde2808de29980efb88f", "f09fa6b8f09f8fbee2808de29980", "f09fa6b8f09f8fbee2808de29980efb88f", "f09fa6b8f09f8fbfe2808de29980", "f09fa6b8f09f8fbfe2808de29980efb88f", "f09fa6b8e2808de29982", "f09fa6b8e2808de29982efb88f", "f09fa6b8f09f8fbbe2808de29982", "f09fa6b8f09f8fbbe2808de29982efb88f", "f09fa6b8f09f8fbce2808de29982", "f09fa6b8f09f8fbce2808de29982efb88f", "f09fa6b8f09f8fbde2808de29982", "f09fa6b8f09f8fbde2808de29982efb88f", "f09fa6b8f09f8fbee2808de29982", "f09fa6b8f09f8fbee2808de29982efb88f", "f09fa6b8f09f8fbfe2808de29982", "f09fa6b8f09f8fbfe2808de29982efb88f", "f09fa6b9", "f09fa6b9f09f8fbb", "f09fa6b9f09f8fbc", "f09fa6b9f09f8fbd", "f09fa6b9f09f8fbe", "f09fa6b9f09f8fbf", "f09fa6b9e2808de29980", "f09fa6b9e2808de29980efb88f", "f09fa6b9f09f8fbbe2808de29980", "f09fa6b9f09f8fbbe2808de29980efb88f", "f09fa6b9f09f8fbce2808de29980", "f09fa6b9f09f8fbce2808de29980efb88f", "f09fa6b9f09f8fbde2808de29980", "f09fa6b9f09f8fbde2808de29980efb88f", "f09fa6b9f09f8fbee2808de29980", "f09fa6b9f09f8fbee2808de29980efb88f", "f09fa6b9f09f8fbfe2808de29980", "f09fa6b9f09f8fbfe2808de29980efb88f", "f09fa6b9e2808de29982", "f09fa6b9e2808de29982efb88f", "f09fa6b9f09f8fbbe2808de29982", "f09fa6b9f09f8fbbe2808de29982efb88f", "f09fa6b9f09f8fbce2808de29982", "f09fa6b9f09f8fbce2808de29982efb88f", "f09fa6b9f09f8fbde2808de29982", "f09fa6b9f09f8fbde2808de29982efb88f", "f09fa6b9f09f8fbee2808de29982", "f09fa6b9f09f8fbee2808de29982efb88f", "f09fa6b9f09f8fbfe2808de29982", "f09fa6b9f09f8fbfe2808de29982efb88f", "f09fa799", "f09fa799f09f8fbb", "f09fa799f09f8fbc", "f09fa799f09f8fbd", "f09fa799f09f8fbe", "f09fa799f09f8fbf", "f09fa799f09f8fbbe2808de29980", "f09fa799f09f8fbbe2808de29980efb88f", "f09fa799f09f8fbce2808de29980", "f09fa799f09f8fbce2808de29980efb88f", "f09fa799f09f8fbde2808de29980", "f09fa799f09f8fbde2808de29980efb88f", "f09fa799f09f8fbee2808de29980", "f09fa799f09f8fbee2808de29980efb88f", "f09fa799f09f8fbfe2808de29980", "f09fa799f09f8fbfe2808de29980efb88f", "f09fa799f09f8fbbe2808de29982", "f09fa799f09f8fbbe2808de29982efb88f", "f09fa799f09f8fbce2808de29982", "f09fa799f09f8fbce2808de29982efb88f", "f09fa799f09f8fbde2808de29982", "f09fa799f09f8fbde2808de29982efb88f", "f09fa799f09f8fbee2808de29982", "f09fa799f09f8fbee2808de29982efb88f", "f09fa799f09f8fbfe2808de29982", "f09fa799f09f8fbfe2808de29982efb88f", "f09fa79a", "f09fa79af09f8fbb", "f09fa79af09f8fbc", "f09fa79af09f8fbd", "f09fa79af09f8fbe", "f09fa79af09f8fbf", "f09fa79af09f8fbbe2808de29980", "f09fa79af09f8fbbe2808de29980efb88f", "f09fa79af09f8fbce2808de29980", "f09fa79af09f8fbce2808de29980efb88f", "f09fa79af09f8fbde2808de29980", "f09fa79af09f8fbde2808de29980efb88f", "f09fa79af09f8fbee2808de29980", "f09fa79af09f8fbee2808de29980efb88f", "f09fa79af09f8fbfe2808de29980", "f09fa79af09f8fbfe2808de29980efb88f", "f09fa79af09f8fbbe2808de29982", "f09fa79af09f8fbbe2808de29982efb88f", "f09fa79af09f8fbce2808de29982", "f09fa79af09f8fbce2808de29982efb88f", "f09fa79af09f8fbde2808de29982", "f09fa79af09f8fbde2808de29982efb88f", "f09fa79af09f8fbee2808de29982", "f09fa79af09f8fbee2808de29982efb88f", "f09fa79af09f8fbfe2808de29982", "f09fa79af09f8fbfe2808de29982efb88f", "f09fa79b", "f09fa79bf09f8fbb", "f09fa79bf09f8fbc", "f09fa79bf09f8fbd", "f09fa79bf09f8fbe", "f09fa79bf09f8fbf", "f09fa79bf09f8fbbe2808de29980", "f09fa79bf09f8fbbe2808de29980efb88f", "f09fa79bf09f8fbce2808de29980", "f09fa79bf09f8fbce2808de29980efb88f", "f09fa79bf09f8fbde2808de29980", "f09fa79bf09f8fbde2808de29980efb88f", "f09fa79bf09f8fbee2808de29980", "f09fa79bf09f8fbee2808de29980efb88f", "f09fa79bf09f8fbfe2808de29980", "f09fa79bf09f8fbfe2808de29980efb88f", "f09fa79bf09f8fbbe2808de29982", "f09fa79bf09f8fbbe2808de29982efb88f", "f09fa79bf09f8fbce2808de29982", "f09fa79bf09f8fbce2808de29982efb88f", "f09fa79bf09f8fbde2808de29982", "f09fa79bf09f8fbde2808de29982efb88f", "f09fa79bf09f8fbee2808de29982", "f09fa79bf09f8fbee2808de29982efb88f", "f09fa79bf09f8fbfe2808de29982", "f09fa79bf09f8fbfe2808de29982efb88f", "f09fa79c", "f09fa79cf09f8fbb", "f09fa79cf09f8fbc", "f09fa79cf09f8fbd", "f09fa79cf09f8fbe", "f09fa79cf09f8fbf", "f09fa79ce2808de29980", "f09fa79ce2808de29980efb88f", "f09fa79cf09f8fbbe2808de29980", "f09fa79cf09f8fbbe2808de29980efb88f", "f09fa79cf09f8fbce2808de29980", "f09fa79cf09f8fbce2808de29980efb88f", "f09fa79cf09f8fbde2808de29980", "f09fa79cf09f8fbde2808de29980efb88f", "f09fa79cf09f8fbee2808de29980", "f09fa79cf09f8fbee2808de29980efb88f", "f09fa79cf09f8fbfe2808de29980", "f09fa79cf09f8fbfe2808de29980efb88f", "f09fa79cf09f8fbbe2808de29982", "f09fa79cf09f8fbbe2808de29982efb88f", "f09fa79cf09f8fbce2808de29982", "f09fa79cf09f8fbce2808de29982efb88f", "f09fa79cf09f8fbde2808de29982", "f09fa79cf09f8fbde2808de29982efb88f", "f09fa79cf09f8fbee2808de29982", "f09fa79cf09f8fbee2808de29982efb88f", "f09fa79cf09f8fbfe2808de29982", "f09fa79cf09f8fbfe2808de29982efb88f", "f09fa79d", "f09fa79df09f8fbb", "f09fa79df09f8fbc", "f09fa79df09f8fbd", "f09fa79df09f8fbe", "f09fa79df09f8fbf", "f09fa79df09f8fbbe2808de29980", "f09fa79df09f8fbbe2808de29980efb88f", "f09fa79df09f8fbce2808de29980", "f09fa79df09f8fbce2808de29980efb88f", "f09fa79df09f8fbde2808de29980", "f09fa79df09f8fbde2808de29980efb88f", "f09fa79df09f8fbee2808de29980", "f09fa79df09f8fbee2808de29980efb88f", "f09fa79df09f8fbfe2808de29980", "f09fa79df09f8fbfe2808de29980efb88f", "f09fa79df09f8fbbe2808de29982", "f09fa79df09f8fbbe2808de29982efb88f", "f09fa79df09f8fbce2808de29982", "f09fa79df09f8fbce2808de29982efb88f", "f09fa79df09f8fbde2808de29982", "f09fa79df09f8fbde2808de29982efb88f", "f09fa79df09f8fbee2808de29982", "f09fa79df09f8fbee2808de29982efb88f", "f09fa79df09f8fbfe2808de29982", "f09fa79df09f8fbfe2808de29982efb88f", "f09fa79e", "f09fa79f", "f09fa79ff09f8fbb", "f09fa79ff09f8fbc", "f09fa79ff09f8fbd", "f09fa79ff09f8fbe", "f09fa79ff09f8fbf", "f09f998d", "f09f998df09f8fbb", "f09f998df09f8fbc", "f09f998df09f8fbd", "f09f998df09f8fbe", "f09f998df09f8fbf", "f09f998df09f8fbbe2808de29982", "f09f998df09f8fbbe2808de29982efb88f", "f09f998df09f8fbce2808de29982", "f09f998df09f8fbce2808de29982efb88f", "f09f998df09f8fbde2808de29982", "f09f998df09f8fbde2808de29982efb88f", "f09f998df09f8fbee2808de29982", "f09f998df09f8fbee2808de29982efb88f", "f09f998df09f8fbfe2808de29982", "f09f998df09f8fbfe2808de29982efb88f", "f09f998df09f8fbbe2808de29980", "f09f998df09f8fbbe2808de29980efb88f", "f09f998df09f8fbce2808de29980", "f09f998df09f8fbce2808de29980efb88f", "f09f998df09f8fbde2808de29980", "f09f998df09f8fbde2808de29980efb88f", "f09f998df09f8fbee2808de29980", "f09f998df09f8fbee2808de29980efb88f", "f09f998df09f8fbfe2808de29980", "f09f998df09f8fbfe2808de29980efb88f", "f09f998e", "f09f998ef09f8fbb", "f09f998ef09f8fbc", "f09f998ef09f8fbd", "f09f998ef09f8fbe", "f09f998ef09f8fbf", "f09f998ef09f8fbbe2808de29982", "f09f998ef09f8fbbe2808de29982efb88f", "f09f998ef09f8fbce2808de29982", "f09f998ef09f8fbce2808de29982efb88f", "f09f998ef09f8fbde2808de29982", "f09f998ef09f8fbde2808de29982efb88f", "f09f998ef09f8fbee2808de29982", "f09f998ef09f8fbee2808de29982efb88f", "f09f998ef09f8fbfe2808de29982", "f09f998ef09f8fbfe2808de29982efb88f", "f09f998ef09f8fbbe2808de29980", "f09f998ef09f8fbbe2808de29980efb88f", "f09f998ef09f8fbce2808de29980", "f09f998ef09f8fbce2808de29980efb88f", "f09f998ef09f8fbde2808de29980", "f09f998ef09f8fbde2808de29980efb88f", "f09f998ef09f8fbee2808de29980", "f09f998ef09f8fbee2808de29980efb88f", "f09f998ef09f8fbfe2808de29980", "f09f998ef09f8fbfe2808de29980efb88f", "f09f9985", "f09f9985f09f8fbb", "f09f9985f09f8fbc", "f09f9985f09f8fbd", "f09f9985f09f8fbe", "f09f9985f09f8fbf", "f09f9985e2808de29982", "f09f9985e2808de29982efb88f", "f09f9985f09f8fbbe2808de29982", "f09f9985f09f8fbbe2808de29982efb88f", "f09f9985f09f8fbce2808de29982", "f09f9985f09f8fbce2808de29982efb88f", "f09f9985f09f8fbde2808de29982", "f09f9985f09f8fbde2808de29982efb88f", "f09f9985f09f8fbee2808de29982", "f09f9985f09f8fbee2808de29982efb88f", "f09f9985f09f8fbfe2808de29982", "f09f9985f09f8fbfe2808de29982efb88f", "f09f9985e2808de29980", "f09f9985e2808de29980efb88f", "f09f9985f09f8fbbe2808de29980", "f09f9985f09f8fbbe2808de29980efb88f", "f09f9985f09f8fbce2808de29980", "f09f9985f09f8fbce2808de29980efb88f", "f09f9985f09f8fbde2808de29980", "f09f9985f09f8fbde2808de29980efb88f", "f09f9985f09f8fbee2808de29980", "f09f9985f09f8fbee2808de29980efb88f", "f09f9985f09f8fbfe2808de29980", "f09f9985f09f8fbfe2808de29980efb88f", "f09f9986", "f09f9986f09f8fbb", "f09f9986f09f8fbc", "f09f9986f09f8fbd", "f09f9986f09f8fbe", "f09f9986f09f8fbf", "f09f9986e2808de29982", "f09f9986e2808de29982efb88f", "f09f9986f09f8fbbe2808de29982", "f09f9986f09f8fbbe2808de29982efb88f", "f09f9986f09f8fbce2808de29982", "f09f9986f09f8fbce2808de29982efb88f", "f09f9986f09f8fbde2808de29982", "f09f9986f09f8fbde2808de29982efb88f", "f09f9986f09f8fbee2808de29982", "f09f9986f09f8fbee2808de29982efb88f", "f09f9986f09f8fbfe2808de29982", "f09f9986f09f8fbfe2808de29982efb88f", "f09f9986e2808de29980", "f09f9986e2808de29980efb88f", "f09f9986f09f8fbbe2808de29980", "f09f9986f09f8fbbe2808de29980efb88f", "f09f9986f09f8fbce2808de29980", "f09f9986f09f8fbce2808de29980efb88f", "f09f9986f09f8fbde2808de29980", "f09f9986f09f8fbde2808de29980efb88f", "f09f9986f09f8fbee2808de29980", "f09f9986f09f8fbee2808de29980efb88f", "f09f9986f09f8fbfe2808de29980", "f09f9986f09f8fbfe2808de29980efb88f", "f09f9281", "f09f9281f09f8fbb", "f09f9281f09f8fbc", "f09f9281f09f8fbd", "f09f9281f09f8fbe", "f09f9281f09f8fbf", "f09f9281f09f8fbbe2808de29982", "f09f9281f09f8fbbe2808de29982efb88f", "f09f9281f09f8fbce2808de29982", "f09f9281f09f8fbce2808de29982efb88f", "f09f9281f09f8fbde2808de29982", "f09f9281f09f8fbde2808de29982efb88f", "f09f9281f09f8fbee2808de29982", "f09f9281f09f8fbee2808de29982efb88f", "f09f9281f09f8fbfe2808de29982", "f09f9281f09f8fbfe2808de29982efb88f", "f09f9281f09f8fbbe2808de29980", "f09f9281f09f8fbbe2808de29980efb88f", "f09f9281f09f8fbce2808de29980", "f09f9281f09f8fbce2808de29980efb88f", "f09f9281f09f8fbde2808de29980", "f09f9281f09f8fbde2808de29980efb88f", "f09f9281f09f8fbee2808de29980", "f09f9281f09f8fbee2808de29980efb88f", "f09f9281f09f8fbfe2808de29980", "f09f9281f09f8fbfe2808de29980efb88f", "f09f998b", "f09f998bf09f8fbb", "f09f998bf09f8fbc", "f09f998bf09f8fbd", "f09f998bf09f8fbe", "f09f998bf09f8fbf", "f09f998bf09f8fbbe2808de29982", "f09f998bf09f8fbbe2808de29982efb88f", "f09f998bf09f8fbce2808de29982", "f09f998bf09f8fbce2808de29982efb88f", "f09f998bf09f8fbde2808de29982", "f09f998bf09f8fbde2808de29982efb88f", "f09f998bf09f8fbee2808de29982", "f09f998bf09f8fbee2808de29982efb88f", "f09f998bf09f8fbfe2808de29982", "f09f998bf09f8fbfe2808de29982efb88f", "f09f998bf09f8fbbe2808de29980", "f09f998bf09f8fbbe2808de29980efb88f", "f09f998bf09f8fbce2808de29980", "f09f998bf09f8fbce2808de29980efb88f", "f09f998bf09f8fbde2808de29980", "f09f998bf09f8fbde2808de29980efb88f", "f09f998bf09f8fbee2808de29980", "f09f998bf09f8fbee2808de29980efb88f", "f09f998bf09f8fbfe2808de29980", "f09f998bf09f8fbfe2808de29980efb88f", "f09f9987", "f09f9987f09f8fbb", "f09f9987f09f8fbc", "f09f9987f09f8fbd", "f09f9987f09f8fbe", "f09f9987f09f8fbf", "f09f9987e2808de29982", "f09f9987e2808de29982efb88f", "f09f9987f09f8fbbe2808de29982", "f09f9987f09f8fbbe2808de29982efb88f", "f09f9987f09f8fbce2808de29982", "f09f9987f09f8fbce2808de29982efb88f", "f09f9987f09f8fbde2808de29982", "f09f9987f09f8fbde2808de29982efb88f", "f09f9987f09f8fbee2808de29982", "f09f9987f09f8fbee2808de29982efb88f", "f09f9987f09f8fbfe2808de29982", "f09f9987f09f8fbfe2808de29982efb88f", "f09f9987e2808de29980", "f09f9987e2808de29980efb88f", "f09f9987f09f8fbbe2808de29980", "f09f9987f09f8fbbe2808de29980efb88f", "f09f9987f09f8fbce2808de29980", "f09f9987f09f8fbce2808de29980efb88f", "f09f9987f09f8fbde2808de29980", "f09f9987f09f8fbde2808de29980efb88f", "f09f9987f09f8fbee2808de29980", "f09f9987f09f8fbee2808de29980efb88f", "f09f9987f09f8fbfe2808de29980", "f09f9987f09f8fbfe2808de29980efb88f", "f09fa4a6", "f09fa4a6f09f8fbb", "f09fa4a6f09f8fbc", "f09fa4a6f09f8fbd", "f09fa4a6f09f8fbe", "f09fa4a6f09f8fbf", "f09fa4a6f09f8fbbe2808de29982", "f09fa4a6f09f8fbbe2808de29982efb88f", "f09fa4a6f09f8fbce2808de29982", "f09fa4a6f09f8fbce2808de29982efb88f", "f09fa4a6f09f8fbde2808de29982", "f09fa4a6f09f8fbde2808de29982efb88f", "f09fa4a6f09f8fbee2808de29982", "f09fa4a6f09f8fbee2808de29982efb88f", "f09fa4a6f09f8fbfe2808de29982", "f09fa4a6f09f8fbfe2808de29982efb88f", "f09fa4a6f09f8fbbe2808de29980", "f09fa4a6f09f8fbbe2808de29980efb88f", "f09fa4a6f09f8fbce2808de29980", "f09fa4a6f09f8fbce2808de29980efb88f", "f09fa4a6f09f8fbde2808de29980", "f09fa4a6f09f8fbde2808de29980efb88f", "f09fa4a6f09f8fbee2808de29980", "f09fa4a6f09f8fbee2808de29980efb88f", "f09fa4a6f09f8fbfe2808de29980", "f09fa4a6f09f8fbfe2808de29980efb88f", "f09fa4b7", "f09fa4b7f09f8fbb", "f09fa4b7f09f8fbc", "f09fa4b7f09f8fbd", "f09fa4b7f09f8fbe", "f09fa4b7f09f8fbf", "f09fa4b7f09f8fbbe2808de29982", "f09fa4b7f09f8fbbe2808de29982efb88f", "f09fa4b7f09f8fbce2808de29982", "f09fa4b7f09f8fbce2808de29982efb88f", "f09fa4b7f09f8fbde2808de29982", "f09fa4b7f09f8fbde2808de29982efb88f", "f09fa4b7f09f8fbee2808de29982", "f09fa4b7f09f8fbee2808de29982efb88f", "f09fa4b7f09f8fbfe2808de29982", "f09fa4b7f09f8fbfe2808de29982efb88f", "f09fa4b7f09f8fbbe2808de29980", "f09fa4b7f09f8fbbe2808de29980efb88f", "f09fa4b7f09f8fbce2808de29980", "f09fa4b7f09f8fbce2808de29980efb88f", "f09fa4b7f09f8fbde2808de29980", "f09fa4b7f09f8fbde2808de29980efb88f", "f09fa4b7f09f8fbee2808de29980", "f09fa4b7f09f8fbee2808de29980efb88f", "f09fa4b7f09f8fbfe2808de29980", "f09fa4b7f09f8fbfe2808de29980efb88f", "f09f9286", "f09f9286f09f8fbb", "f09f9286f09f8fbc", "f09f9286f09f8fbd", "f09f9286f09f8fbe", "f09f9286f09f8fbf", "f09f9286e2808de29982", "f09f9286e2808de29982efb88f", "f09f9286f09f8fbbe2808de29982", "f09f9286f09f8fbbe2808de29982efb88f", "f09f9286f09f8fbce2808de29982", "f09f9286f09f8fbce2808de29982efb88f", "f09f9286f09f8fbde2808de29982", "f09f9286f09f8fbde2808de29982efb88f", "f09f9286f09f8fbee2808de29982", "f09f9286f09f8fbee2808de29982efb88f", "f09f9286f09f8fbfe2808de29982", "f09f9286f09f8fbfe2808de29982efb88f", "f09f9286e2808de29980", "f09f9286e2808de29980efb88f", "f09f9286f09f8fbbe2808de29980", "f09f9286f09f8fbbe2808de29980efb88f", "f09f9286f09f8fbce2808de29980", "f09f9286f09f8fbce2808de29980efb88f", "f09f9286f09f8fbde2808de29980", "f09f9286f09f8fbde2808de29980efb88f", "f09f9286f09f8fbee2808de29980", "f09f9286f09f8fbee2808de29980efb88f", "f09f9286f09f8fbfe2808de29980", "f09f9286f09f8fbfe2808de29980efb88f", "f09f9287", "f09f9287f09f8fbb", "f09f9287f09f8fbc", "f09f9287f09f8fbd", "f09f9287f09f8fbe", "f09f9287f09f8fbf", "f09f9287f09f8fbbe2808de29982", "f09f9287f09f8fbbe2808de29982efb88f", "f09f9287f09f8fbce2808de29982", "f09f9287f09f8fbce2808de29982efb88f", "f09f9287f09f8fbde2808de29982", "f09f9287f09f8fbde2808de29982efb88f", "f09f9287f09f8fbee2808de29982", "f09f9287f09f8fbee2808de29982efb88f", "f09f9287f09f8fbfe2808de29982", "f09f9287f09f8fbfe2808de29982efb88f", "f09f9287f09f8fbbe2808de29980", "f09f9287f09f8fbbe2808de29980efb88f", "f09f9287f09f8fbce2808de29980", "f09f9287f09f8fbce2808de29980efb88f", "f09f9287f09f8fbde2808de29980", "f09f9287f09f8fbde2808de29980efb88f", "f09f9287f09f8fbee2808de29980", "f09f9287f09f8fbee2808de29980efb88f", "f09f9287f09f8fbfe2808de29980", "f09f9287f09f8fbfe2808de29980efb88f", "f09f9ab6", "f09f9ab6f09f8fbb", "f09f9ab6f09f8fbc", "f09f9ab6f09f8fbd", "f09f9ab6f09f8fbe", "f09f9ab6f09f8fbf", "f09f9ab6f09f8fbbe2808de29982", "f09f9ab6f09f8fbbe2808de29982efb88f", "f09f9ab6f09f8fbce2808de29982", "f09f9ab6f09f8fbce2808de29982efb88f", "f09f9ab6f09f8fbde2808de29982", "f09f9ab6f09f8fbde2808de29982efb88f", "f09f9ab6f09f8fbee2808de29982", "f09f9ab6f09f8fbee2808de29982efb88f", "f09f9ab6f09f8fbfe2808de29982", "f09f9ab6f09f8fbfe2808de29982efb88f", "f09f9ab6f09f8fbbe2808de29980", "f09f9ab6f09f8fbbe2808de29980efb88f", "f09f9ab6f09f8fbce2808de29980", "f09f9ab6f09f8fbce2808de29980efb88f", "f09f9ab6f09f8fbde2808de29980", "f09f9ab6f09f8fbde2808de29980efb88f", "f09f9ab6f09f8fbee2808de29980", "f09f9ab6f09f8fbee2808de29980efb88f", "f09f9ab6f09f8fbfe2808de29980", "f09f9ab6f09f8fbfe2808de29980efb88f", "f09f8f83", "f09f8f83f09f8fbb", "f09f8f83f09f8fbc", "f09f8f83f09f8fbd", "f09f8f83f09f8fbe", "f09f8f83f09f8fbf", "f09f8f83f09f8fbbe2808de29982", "f09f8f83f09f8fbbe2808de29982efb88f", "f09f8f83f09f8fbce2808de29982", "f09f8f83f09f8fbce2808de29982efb88f", "f09f8f83f09f8fbde2808de29982", "f09f8f83f09f8fbde2808de29982efb88f", "f09f8f83f09f8fbee2808de29982", "f09f8f83f09f8fbee2808de29982efb88f", "f09f8f83f09f8fbfe2808de29982", "f09f8f83f09f8fbfe2808de29982efb88f", "f09f8f83f09f8fbbe2808de29980", "f09f8f83f09f8fbbe2808de29980efb88f", "f09f8f83f09f8fbce2808de29980", "f09f8f83f09f8fbce2808de29980efb88f", "f09f8f83f09f8fbde2808de29980", "f09f8f83f09f8fbde2808de29980efb88f", "f09f8f83f09f8fbee2808de29980", "f09f8f83f09f8fbee2808de29980efb88f", "f09f8f83f09f8fbfe2808de29980", "f09f8f83f09f8fbfe2808de29980efb88f", "f09f9283f09f8fbb", "f09f9283f09f8fbc", "f09f9283f09f8fbd", "f09f9283f09f8fbe", "f09f9283f09f8fbf", "f09f95baf09f8fbb", "f09f95baf09f8fbc", "f09f95baf09f8fbd", "f09f95baf09f8fbe", "f09f95baf09f8fbf", "f09f91afe2808de29982", "f09f91afe2808de29982efb88f", "f09f91aff09f8fbbe2808de29982", "f09f91aff09f8fbbe2808de29982efb88f", "f09f91aff09f8fbce2808de29982", "f09f91aff09f8fbce2808de29982efb88f", "f09f91aff09f8fbde2808de29982", "f09f91aff09f8fbde2808de29982efb88f", "f09f91aff09f8fbee2808de29982", "f09f91aff09f8fbee2808de29982efb88f", "f09f91aff09f8fbfe2808de29982", "f09f91aff09f8fbfe2808de29982efb88f", "f09f91afe2808de29980", "f09f91afe2808de29980efb88f", "f09f91aff09f8fbbe2808de29980", "f09f91aff09f8fbbe2808de29980efb88f", "f09f91aff09f8fbce2808de29980", "f09f91aff09f8fbce2808de29980efb88f", "f09f91aff09f8fbde2808de29980", "f09f91aff09f8fbde2808de29980efb88f", "f09f91aff09f8fbee2808de29980", "f09f91aff09f8fbee2808de29980efb88f", "f09f91aff09f8fbfe2808de29980", "f09f91aff09f8fbfe2808de29980efb88f", "f09fa796", "f09fa796f09f8fbb", "f09fa796f09f8fbc", "f09fa796f09f8fbd", "f09fa796f09f8fbe", "f09fa796f09f8fbf", "f09fa796f09f8fbbe2808de29980", "f09fa796f09f8fbbe2808de29980efb88f", "f09fa796f09f8fbce2808de29980", "f09fa796f09f8fbce2808de29980efb88f", "f09fa796f09f8fbde2808de29980", "f09fa796f09f8fbde2808de29980efb88f", "f09fa796f09f8fbee2808de29980", "f09fa796f09f8fbee2808de29980efb88f", "f09fa796f09f8fbfe2808de29980", "f09fa796f09f8fbfe2808de29980efb88f", "f09fa796f09f8fbbe2808de29982", "f09fa796f09f8fbbe2808de29982efb88f", "f09fa796f09f8fbce2808de29982", "f09fa796f09f8fbce2808de29982efb88f", "f09fa796f09f8fbde2808de29982", "f09fa796f09f8fbde2808de29982efb88f", "f09fa796f09f8fbee2808de29982", "f09fa796f09f8fbee2808de29982efb88f", "f09fa796f09f8fbfe2808de29982", "f09fa796f09f8fbfe2808de29982efb88f", "f09fa797", "f09fa797f09f8fbb", "f09fa797f09f8fbc", "f09fa797f09f8fbd", "f09fa797f09f8fbe", "f09fa797f09f8fbf", "f09fa797f09f8fbbe2808de29980", "f09fa797f09f8fbbe2808de29980efb88f", "f09fa797f09f8fbce2808de29980", "f09fa797f09f8fbce2808de29980efb88f", "f09fa797f09f8fbde2808de29980", "f09fa797f09f8fbde2808de29980efb88f", "f09fa797f09f8fbee2808de29980", "f09fa797f09f8fbee2808de29980efb88f", "f09fa797f09f8fbfe2808de29980", "f09fa797f09f8fbfe2808de29980efb88f", "f09fa797f09f8fbbe2808de29982", "f09fa797f09f8fbbe2808de29982efb88f", "f09fa797f09f8fbce2808de29982", "f09fa797f09f8fbce2808de29982efb88f", "f09fa797f09f8fbde2808de29982", "f09fa797f09f8fbde2808de29982efb88f", "f09fa797f09f8fbee2808de29982", "f09fa797f09f8fbee2808de29982efb88f", "f09fa797f09f8fbfe2808de29982", "f09fa797f09f8fbfe2808de29982efb88f", "f09fa798", "f09fa798f09f8fbb", "f09fa798f09f8fbc", "f09fa798f09f8fbd", "f09fa798f09f8fbe", "f09fa798f09f8fbf", "f09fa798f09f8fbbe2808de29980", "f09fa798f09f8fbbe2808de29980efb88f", "f09fa798f09f8fbce2808de29980", "f09fa798f09f8fbce2808de29980efb88f", "f09fa798f09f8fbde2808de29980", "f09fa798f09f8fbde2808de29980efb88f", "f09fa798f09f8fbee2808de29980", "f09fa798f09f8fbee2808de29980efb88f", "f09fa798f09f8fbfe2808de29980", "f09fa798f09f8fbfe2808de29980efb88f", "f09fa798f09f8fbbe2808de29982", "f09fa798f09f8fbbe2808de29982efb88f", "f09fa798f09f8fbce2808de29982", "f09fa798f09f8fbce2808de29982efb88f", "f09fa798f09f8fbde2808de29982", "f09fa798f09f8fbde2808de29982efb88f", "f09fa798f09f8fbee2808de29982", "f09fa798f09f8fbee2808de29982efb88f", "f09fa798f09f8fbfe2808de29982", "f09fa798f09f8fbfe2808de29982efb88f", "f09f9b80f09f8fbb", "f09f9b80f09f8fbc", "f09f9b80f09f8fbd", "f09f9b80f09f8fbe", "f09f9b80f09f8fbf", "f09f95b4f09f8fbb", "f09f95b4f09f8fbc", "f09f95b4f09f8fbd", "f09f95b4f09f8fbe", "f09f95b4f09f8fbf", "f09f8f87f09f8fbb", "f09f8f87f09f8fbc", "f09f8f87f09f8fbd", "f09f8f87f09f8fbe", "f09f8f87f09f8fbf", "f09f8f8c", "f09f8f8cefb88ff09f8fbb", "f09f8f8cf09f8fbb", "f09f8f8cefb88ff09f8fbc", "f09f8f8cf09f8fbc", "f09f8f8cefb88ff09f8fbd", "f09f8f8cf09f8fbd", "f09f8f8cefb88ff09f8fbe", "f09f8f8cf09f8fbe", "f09f8f8cefb88ff09f8fbf", "f09f8f8cf09f8fbf", "f09f8f8cefb88ff09f8fbbe2808de29982efb88f", "f09f8f8cf09f8fbbe2808de29982", "f09f8f8cefb88ff09f8fbce2808de29982efb88f", "f09f8f8cf09f8fbce2808de29982", "f09f8f8cefb88ff09f8fbde2808de29982efb88f", "f09f8f8cf09f8fbde2808de29982", "f09f8f8cefb88ff09f8fbee2808de29982efb88f", "f09f8f8cf09f8fbee2808de29982", "f09f8f8cefb88ff09f8fbfe2808de29982efb88f", "f09f8f8cf09f8fbfe2808de29982", "f09f8f8cefb88ff09f8fbbe2808de29980efb88f", "f09f8f8cf09f8fbbe2808de29980", "f09f8f8cefb88ff09f8fbce2808de29980efb88f", "f09f8f8cf09f8fbce2808de29980", "f09f8f8cefb88ff09f8fbde2808de29980efb88f", "f09f8f8cf09f8fbde2808de29980", "f09f8f8cefb88ff09f8fbee2808de29980efb88f", "f09f8f8cf09f8fbee2808de29980", "f09f8f8cefb88ff09f8fbfe2808de29980efb88f", "f09f8f8cf09f8fbfe2808de29980", "f09f8f84", "f09f8f84f09f8fbb", "f09f8f84f09f8fbc", "f09f8f84f09f8fbd", "f09f8f84f09f8fbe", "f09f8f84f09f8fbf", "f09f8f84f09f8fbbe2808de29982", "f09f8f84f09f8fbbe2808de29982efb88f", "f09f8f84f09f8fbce2808de29982", "f09f8f84f09f8fbce2808de29982efb88f", "f09f8f84f09f8fbde2808de29982", "f09f8f84f09f8fbde2808de29982efb88f", "f09f8f84f09f8fbee2808de29982", "f09f8f84f09f8fbee2808de29982efb88f", "f09f8f84f09f8fbfe2808de29982", "f09f8f84f09f8fbfe2808de29982efb88f", "f09f8f84f09f8fbbe2808de29980", "f09f8f84f09f8fbbe2808de29980efb88f", "f09f8f84f09f8fbce2808de29980", "f09f8f84f09f8fbce2808de29980efb88f", "f09f8f84f09f8fbde2808de29980", "f09f8f84f09f8fbde2808de29980efb88f", "f09f8f84f09f8fbee2808de29980", "f09f8f84f09f8fbee2808de29980efb88f", "f09f8f84f09f8fbfe2808de29980", "f09f8f84f09f8fbfe2808de29980efb88f", "f09f9aa3", "f09f9aa3f09f8fbb", "f09f9aa3f09f8fbc", "f09f9aa3f09f8fbd", "f09f9aa3f09f8fbe", "f09f9aa3f09f8fbf", "f09f9aa3f09f8fbbe2808de29982", "f09f9aa3f09f8fbbe2808de29982efb88f", "f09f9aa3f09f8fbce2808de29982", "f09f9aa3f09f8fbce2808de29982efb88f", "f09f9aa3f09f8fbde2808de29982", "f09f9aa3f09f8fbde2808de29982efb88f", "f09f9aa3f09f8fbee2808de29982", "f09f9aa3f09f8fbee2808de29982efb88f", "f09f9aa3f09f8fbfe2808de29982", "f09f9aa3f09f8fbfe2808de29982efb88f", "f09f9aa3f09f8fbbe2808de29980", "f09f9aa3f09f8fbbe2808de29980efb88f", "f09f9aa3f09f8fbce2808de29980", "f09f9aa3f09f8fbce2808de29980efb88f", "f09f9aa3f09f8fbde2808de29980", "f09f9aa3f09f8fbde2808de29980efb88f", "f09f9aa3f09f8fbee2808de29980", "f09f9aa3f09f8fbee2808de29980efb88f", "f09f9aa3f09f8fbfe2808de29980", "f09f9aa3f09f8fbfe2808de29980efb88f", "f09f8f8a", "f09f8f8af09f8fbb", "f09f8f8af09f8fbc", "f09f8f8af09f8fbd", "f09f8f8af09f8fbe", "f09f8f8af09f8fbf", "f09f8f8af09f8fbbe2808de29982", "f09f8f8af09f8fbbe2808de29982efb88f", "f09f8f8af09f8fbce2808de29982", "f09f8f8af09f8fbce2808de29982efb88f", "f09f8f8af09f8fbde2808de29982", "f09f8f8af09f8fbde2808de29982efb88f", "f09f8f8af09f8fbee2808de29982", "f09f8f8af09f8fbee2808de29982efb88f", "f09f8f8af09f8fbfe2808de29982", "f09f8f8af09f8fbfe2808de29982efb88f", "f09f8f8af09f8fbbe2808de29980", "f09f8f8af09f8fbbe2808de29980efb88f", "f09f8f8af09f8fbce2808de29980", "f09f8f8af09f8fbce2808de29980efb88f", "f09f8f8af09f8fbde2808de29980", "f09f8f8af09f8fbde2808de29980efb88f", "f09f8f8af09f8fbee2808de29980", "f09f8f8af09f8fbee2808de29980efb88f", "f09f8f8af09f8fbfe2808de29980", "f09f8f8af09f8fbfe2808de29980efb88f", "e29bb9", "e29bb9efb88ff09f8fbb", "e29bb9f09f8fbb", "e29bb9efb88ff09f8fbc", "e29bb9f09f8fbc", "e29bb9efb88ff09f8fbd", "e29bb9f09f8fbd", "e29bb9efb88ff09f8fbe", "e29bb9f09f8fbe", "e29bb9efb88ff09f8fbf", "e29bb9f09f8fbf", "e29bb9e2808de29982", "e29bb9efb88fe2808de29982efb88f", "e29bb9efb88ff09f8fbbe2808de29982efb88f", "e29bb9f09f8fbbe2808de29982", "e29bb9efb88ff09f8fbce2808de29982efb88f", "e29bb9f09f8fbce2808de29982", "e29bb9efb88ff09f8fbde2808de29982efb88f", "e29bb9f09f8fbde2808de29982", "e29bb9efb88ff09f8fbee2808de29982efb88f", "e29bb9f09f8fbee2808de29982", "e29bb9efb88ff09f8fbfe2808de29982efb88f", "e29bb9f09f8fbfe2808de29982", "e29bb9e2808de29980", "e29bb9efb88fe2808de29980efb88f", "e29bb9efb88ff09f8fbbe2808de29980efb88f", "e29bb9f09f8fbbe2808de29980", "e29bb9efb88ff09f8fbce2808de29980efb88f", "e29bb9f09f8fbce2808de29980", "e29bb9efb88ff09f8fbde2808de29980efb88f", "e29bb9f09f8fbde2808de29980", "e29bb9efb88ff09f8fbee2808de29980efb88f", "e29bb9f09f8fbee2808de29980", "e29bb9efb88ff09f8fbfe2808de29980efb88f", "e29bb9f09f8fbfe2808de29980", "f09f8f8b", "f09f8f8befb88ff09f8fbb", "f09f8f8bf09f8fbb", "f09f8f8befb88ff09f8fbc", "f09f8f8bf09f8fbc", "f09f8f8befb88ff09f8fbd", "f09f8f8bf09f8fbd", "f09f8f8befb88ff09f8fbe", "f09f8f8bf09f8fbe", "f09f8f8befb88ff09f8fbf", "f09f8f8bf09f8fbf", "f09f8f8be2808de29982", "f09f8f8befb88fe2808de29982efb88f", "f09f8f8befb88ff09f8fbbe2808de29982efb88f", "f09f8f8bf09f8fbbe2808de29982", "f09f8f8befb88ff09f8fbce2808de29982efb88f", "f09f8f8bf09f8fbce2808de29982", "f09f8f8befb88ff09f8fbde2808de29982efb88f", "f09f8f8bf09f8fbde2808de29982", "f09f8f8befb88ff09f8fbee2808de29982efb88f", "f09f8f8bf09f8fbee2808de29982", "f09f8f8befb88ff09f8fbfe2808de29982efb88f", "f09f8f8bf09f8fbfe2808de29982", "f09f8f8be2808de29980", "f09f8f8befb88fe2808de29980efb88f", "f09f8f8befb88ff09f8fbbe2808de29980efb88f", "f09f8f8bf09f8fbbe2808de29980", "f09f8f8befb88ff09f8fbce2808de29980efb88f", "f09f8f8bf09f8fbce2808de29980", "f09f8f8befb88ff09f8fbde2808de29980efb88f", "f09f8f8bf09f8fbde2808de29980", "f09f8f8befb88ff09f8fbee2808de29980efb88f", "f09f8f8bf09f8fbee2808de29980", "f09f8f8befb88ff09f8fbfe2808de29980efb88f", "f09f8f8bf09f8fbfe2808de29980", "f09f9ab4", "f09f9ab4f09f8fbb", "f09f9ab4f09f8fbc", "f09f9ab4f09f8fbd", "f09f9ab4f09f8fbe", "f09f9ab4f09f8fbf", "f09f9ab4f09f8fbbe2808de29982", "f09f9ab4f09f8fbbe2808de29982efb88f", "f09f9ab4f09f8fbce2808de29982", "f09f9ab4f09f8fbce2808de29982efb88f", "f09f9ab4f09f8fbde2808de29982", "f09f9ab4f09f8fbde2808de29982efb88f", "f09f9ab4f09f8fbee2808de29982", "f09f9ab4f09f8fbee2808de29982efb88f", "f09f9ab4f09f8fbfe2808de29982", "f09f9ab4f09f8fbfe2808de29982efb88f", "f09f9ab4f09f8fbbe2808de29980", "f09f9ab4f09f8fbbe2808de29980efb88f", "f09f9ab4f09f8fbce2808de29980", "f09f9ab4f09f8fbce2808de29980efb88f", "f09f9ab4f09f8fbde2808de29980", "f09f9ab4f09f8fbde2808de29980efb88f", "f09f9ab4f09f8fbee2808de29980", "f09f9ab4f09f8fbee2808de29980efb88f", "f09f9ab4f09f8fbfe2808de29980", "f09f9ab4f09f8fbfe2808de29980efb88f", "f09f9ab5", "f09f9ab5f09f8fbb", "f09f9ab5f09f8fbc", "f09f9ab5f09f8fbd", "f09f9ab5f09f8fbe", "f09f9ab5f09f8fbf", "f09f9ab5f09f8fbbe2808de29982", "f09f9ab5f09f8fbbe2808de29982efb88f", "f09f9ab5f09f8fbce2808de29982", "f09f9ab5f09f8fbce2808de29982efb88f", "f09f9ab5f09f8fbde2808de29982", "f09f9ab5f09f8fbde2808de29982efb88f", "f09f9ab5f09f8fbee2808de29982", "f09f9ab5f09f8fbee2808de29982efb88f", "f09f9ab5f09f8fbfe2808de29982", "f09f9ab5f09f8fbfe2808de29982efb88f", "f09f9ab5f09f8fbbe2808de29980", "f09f9ab5f09f8fbbe2808de29980efb88f", "f09f9ab5f09f8fbce2808de29980", "f09f9ab5f09f8fbce2808de29980efb88f", "f09f9ab5f09f8fbde2808de29980", "f09f9ab5f09f8fbde2808de29980efb88f", "f09f9ab5f09f8fbee2808de29980", "f09f9ab5f09f8fbee2808de29980efb88f", "f09f9ab5f09f8fbfe2808de29980", "f09f9ab5f09f8fbfe2808de29980efb88f", "f09fa4b8", "f09fa4b8f09f8fbb", "f09fa4b8f09f8fbc", "f09fa4b8f09f8fbd", "f09fa4b8f09f8fbe", "f09fa4b8f09f8fbf", "f09fa4b8e2808de29982", "f09fa4b8e2808de29982efb88f", "f09fa4b8f09f8fbbe2808de29982", "f09fa4b8f09f8fbbe2808de29982efb88f", "f09fa4b8f09f8fbce2808de29982", "f09fa4b8f09f8fbce2808de29982efb88f", "f09fa4b8f09f8fbde2808de29982", "f09fa4b8f09f8fbde2808de29982efb88f", "f09fa4b8f09f8fbee2808de29982", "f09fa4b8f09f8fbee2808de29982efb88f", "f09fa4b8f09f8fbfe2808de29982", "f09fa4b8f09f8fbfe2808de29982efb88f", "f09fa4b8e2808de29980", "f09fa4b8e2808de29980efb88f", "f09fa4b8f09f8fbbe2808de29980", "f09fa4b8f09f8fbbe2808de29980efb88f", "f09fa4b8f09f8fbce2808de29980", "f09fa4b8f09f8fbce2808de29980efb88f", "f09fa4b8f09f8fbde2808de29980", "f09fa4b8f09f8fbde2808de29980efb88f", "f09fa4b8f09f8fbee2808de29980", "f09fa4b8f09f8fbee2808de29980efb88f", "f09fa4b8f09f8fbfe2808de29980", "f09fa4b8f09f8fbfe2808de29980efb88f", "f09fa4bc", "f09fa4bce2808de29980", "f09fa4bce2808de29980efb88f", "f09fa4bcf09f8fbb", "f09fa4bcf09f8fbbe2808de29980", "f09fa4bcf09f8fbbe2808de29980efb88f", "f09fa4bcf09f8fbc", "f09fa4bcf09f8fbce2808de29980", "f09fa4bcf09f8fbce2808de29980efb88f", "f09fa4bcf09f8fbd", "f09fa4bcf09f8fbde2808de29980", "f09fa4bcf09f8fbde2808de29980efb88f", "f09fa4bcf09f8fbe", "f09fa4bcf09f8fbee2808de29980", "f09fa4bcf09f8fbee2808de29980efb88f", "f09fa4bcf09f8fbf", "f09fa4bcf09f8fbfe2808de29980", "f09fa4bcf09f8fbfe2808de29980efb88f", "f09fa4bd", "f09fa4bdf09f8fbb", "f09fa4bdf09f8fbc", "f09fa4bdf09f8fbd", "f09fa4bdf09f8fbe", "f09fa4bdf09f8fbf", "f09fa4bdf09f8fbbe2808de29982", "f09fa4bdf09f8fbbe2808de29982efb88f", "f09fa4bdf09f8fbce2808de29982", "f09fa4bdf09f8fbce2808de29982efb88f", "f09fa4bdf09f8fbde2808de29982", "f09fa4bdf09f8fbde2808de29982efb88f", "f09fa4bdf09f8fbee2808de29982", "f09fa4bdf09f8fbee2808de29982efb88f", "f09fa4bdf09f8fbfe2808de29982", "f09fa4bdf09f8fbfe2808de29982efb88f", "f09fa4bdf09f8fbbe2808de29980", "f09fa4bdf09f8fbbe2808de29980efb88f", "f09fa4bdf09f8fbce2808de29980", "f09fa4bdf09f8fbce2808de29980efb88f", "f09fa4bdf09f8fbde2808de29980", "f09fa4bdf09f8fbde2808de29980efb88f", "f09fa4bdf09f8fbee2808de29980", "f09fa4bdf09f8fbee2808de29980efb88f", "f09fa4bdf09f8fbfe2808de29980", "f09fa4bdf09f8fbfe2808de29980efb88f", "f09fa4be", "f09fa4bef09f8fbb", "f09fa4bef09f8fbc", "f09fa4bef09f8fbd", "f09fa4bef09f8fbe", "f09fa4bef09f8fbf", "f09fa4bef09f8fbbe2808de29982", "f09fa4bef09f8fbbe2808de29982efb88f", "f09fa4bef09f8fbce2808de29982", "f09fa4bef09f8fbce2808de29982efb88f", "f09fa4bef09f8fbde2808de29982", "f09fa4bef09f8fbde2808de29982efb88f", "f09fa4bef09f8fbee2808de29982", "f09fa4bef09f8fbee2808de29982efb88f", "f09fa4bef09f8fbfe2808de29982", "f09fa4bef09f8fbfe2808de29982efb88f", "f09fa4bef09f8fbbe2808de29980", "f09fa4bef09f8fbbe2808de29980efb88f", "f09fa4bef09f8fbce2808de29980", "f09fa4bef09f8fbce2808de29980efb88f", "f09fa4bef09f8fbde2808de29980", "f09fa4bef09f8fbde2808de29980efb88f", "f09fa4bef09f8fbee2808de29980", "f09fa4bef09f8fbee2808de29980efb88f", "f09fa4bef09f8fbfe2808de29980", "f09fa4bef09f8fbfe2808de29980efb88f", "f09fa4b9", "f09fa4b9f09f8fbb", "f09fa4b9f09f8fbc", "f09fa4b9f09f8fbd", "f09fa4b9f09f8fbe", "f09fa4b9f09f8fbf", "f09fa4b9f09f8fbbe2808de29982", "f09fa4b9f09f8fbbe2808de29982efb88f", "f09fa4b9f09f8fbce2808de29982", "f09fa4b9f09f8fbce2808de29982efb88f", "f09fa4b9f09f8fbde2808de29982", "f09fa4b9f09f8fbde2808de29982efb88f", "f09fa4b9f09f8fbee2808de29982", "f09fa4b9f09f8fbee2808de29982efb88f", "f09fa4b9f09f8fbfe2808de29982", "f09fa4b9f09f8fbfe2808de29982efb88f", "f09fa4b9f09f8fbbe2808de29980", "f09fa4b9f09f8fbbe2808de29980efb88f", "f09fa4b9f09f8fbce2808de29980", "f09fa4b9f09f8fbce2808de29980efb88f", "f09fa4b9f09f8fbde2808de29980", "f09fa4b9f09f8fbde2808de29980efb88f", "f09fa4b9f09f8fbee2808de29980", "f09fa4b9f09f8fbee2808de29980efb88f", "f09fa4b9f09f8fbfe2808de29980", "f09fa4b9f09f8fbfe2808de29980efb88f", "f09f91a9e2808de29da4e2808df09f928be2808df09f91a8", "f09f91a9e2808de29da4efb88fe2808df09f928be2808df09f91a8", "f09f91a8e2808de29da4e2808df09f928be2808df09f91a8", "f09f91a8e2808de29da4efb88fe2808df09f928be2808df09f91a8", "f09f91a9e2808de29da4e2808df09f928be2808df09f91a9", "f09f91a9e2808de29da4efb88fe2808df09f928be2808df09f91a9", "f09f91a9e2808de29da4e2808df09f91a8", "f09f91a9e2808de29da4efb88fe2808df09f91a8", "f09f91a8e2808de29da4e2808df09f91a8", "f09f91a8e2808de29da4efb88fe2808df09f91a8", "f09f91a9e2808de29da4e2808df09f91a9", "f09f91a9e2808de29da4efb88fe2808df09f91a9", "f09f91a8e2808df09f91a9e2808df09f91a6", "f09f91a8e2808df09f91a9e2808df09f91a7", "f09f91a8e2808df09f91a9e2808df09f91a7e2808df09f91a6", "f09f91a8e2808df09f91a9e2808df09f91a6e2808df09f91a6", "f09f91a8e2808df09f91a9e2808df09f91a7e2808df09f91a7", "f09f91a8e2808df09f91a8e2808df09f91a6", "f09f91a8e2808df09f91a8e2808df09f91a7", "f09f91a8e2808df09f91a8e2808df09f91a7e2808df09f91a6", "f09f91a8e2808df09f91a8e2808df09f91a6e2808df09f91a6", "f09f91a8e2808df09f91a8e2808df09f91a7e2808df09f91a7", "f09f91a9e2808df09f91a9e2808df09f91a6", "f09f91a9e2808df09f91a9e2808df09f91a7", "f09f91a9e2808df09f91a9e2808df09f91a7e2808df09f91a6", "f09f91a9e2808df09f91a9e2808df09f91a6e2808df09f91a6", "f09f91a9e2808df09f91a9e2808df09f91a7e2808df09f91a7", "f09f91a8e2808df09f91a6", "f09f91a8e2808df09f91a6e2808df09f91a6", "f09f91a8e2808df09f91a7", "f09f91a8e2808df09f91a7e2808df09f91a6", "f09f91a8e2808df09f91a7e2808df09f91a7", "f09f91a9e2808df09f91a6", "f09f91a9e2808df09f91a6e2808df09f91a6", "f09f91a9e2808df09f91a7", "f09f91a9e2808df09f91a7e2808df09f91a6", "f09f91a9e2808df09f91a7e2808df09f91a7", "f09fa4b3f09f8fbb", "f09fa4b3f09f8fbc", "f09fa4b3f09f8fbd", "f09fa4b3f09f8fbe", "f09fa4b3f09f8fbf", "f09f92aaf09f8fbb", "f09f92aaf09f8fbc", "f09f92aaf09f8fbd", "f09f92aaf09f8fbe", "f09f92aaf09f8fbf", "f09fa6b5", "f09fa6b5f09f8fbb", "f09fa6b5f09f8fbc", "f09fa6b5f09f8fbd", "f09fa6b5f09f8fbe", "f09fa6b5f09f8fbf", "f09fa6b6", "f09fa6b6f09f8fbb", "f09fa6b6f09f8fbc", "f09fa6b6f09f8fbd", "f09fa6b6f09f8fbe", "f09fa6b6f09f8fbf", "f09f9188f09f8fbb", "f09f9188f09f8fbc", "f09f9188f09f8fbd", "f09f9188f09f8fbe", "f09f9188f09f8fbf", "f09f9189f09f8fbb", "f09f9189f09f8fbc", "f09f9189f09f8fbd", "f09f9189f09f8fbe", "f09f9189f09f8fbf", "e2989defb88ff09f8fbb", "e2989df09f8fbb", "e2989defb88ff09f8fbc", "e2989df09f8fbc", "e2989defb88ff09f8fbd", "e2989df09f8fbd", "e2989defb88ff09f8fbe", "e2989df09f8fbe", "e2989defb88ff09f8fbf", "e2989df09f8fbf", "f09f9186f09f8fbb", "f09f9186f09f8fbc", "f09f9186f09f8fbd", "f09f9186f09f8fbe", "f09f9186f09f8fbf", "f09f9695f09f8fbb", "f09f9695f09f8fbc", "f09f9695f09f8fbd", "f09f9695f09f8fbe", "f09f9695f09f8fbf", "f09f9187f09f8fbb", "f09f9187f09f8fbc", "f09f9187f09f8fbd", "f09f9187f09f8fbe", "f09f9187f09f8fbf", "e29c8cefb88ff09f8fbb", "e29c8cf09f8fbb", "e29c8cefb88ff09f8fbc", "e29c8cf09f8fbc", "e29c8cefb88ff09f8fbd", "e29c8cf09f8fbd", "e29c8cefb88ff09f8fbe", "e29c8cf09f8fbe", "e29c8cefb88ff09f8fbf", "e29c8cf09f8fbf", "f09fa49ef09f8fbb", "f09fa49ef09f8fbc", "f09fa49ef09f8fbd", "f09fa49ef09f8fbe", "f09fa49ef09f8fbf", "f09f9696f09f8fbb", "f09f9696f09f8fbc", "f09f9696f09f8fbd", "f09f9696f09f8fbe", "f09f9696f09f8fbf", "f09fa498f09f8fbb", "f09fa498f09f8fbc", "f09fa498f09f8fbd", "f09fa498f09f8fbe", "f09fa498f09f8fbf", "f09fa499f09f8fbb", "f09fa499f09f8fbc", "f09fa499f09f8fbd", "f09fa499f09f8fbe", "f09fa499f09f8fbf", "f09f9690f09f8fbb", "f09f9690f09f8fbc", "f09f9690f09f8fbd", "f09f9690f09f8fbe", "f09f9690f09f8fbf", "e29c8befb88ff09f8fbb", "e29c8bf09f8fbb", "e29c8befb88ff09f8fbc", "e29c8bf09f8fbc", "e29c8befb88ff09f8fbd", "e29c8bf09f8fbd", "e29c8befb88ff09f8fbe", "e29c8bf09f8fbe", "e29c8befb88ff09f8fbf", "e29c8bf09f8fbf", "f09f918cf09f8fbb", "f09f918cf09f8fbc", "f09f918cf09f8fbd", "f09f918cf09f8fbe", "f09f918cf09f8fbf", "f09f918df09f8fbb", "f09f918df09f8fbc", "f09f918df09f8fbd", "f09f918df09f8fbe", "f09f918df09f8fbf", "f09f918ef09f8fbb", "f09f918ef09f8fbc", "f09f918ef09f8fbd", "f09f918ef09f8fbe", "f09f918ef09f8fbf", "e29c8aefb88ff09f8fbb", "e29c8af09f8fbb", "e29c8aefb88ff09f8fbc", "e29c8af09f8fbc", "e29c8aefb88ff09f8fbd", "e29c8af09f8fbd", "e29c8aefb88ff09f8fbe", "e29c8af09f8fbe", "e29c8aefb88ff09f8fbf", "e29c8af09f8fbf", "f09f918af09f8fbb", "f09f918af09f8fbc", "f09f918af09f8fbd", "f09f918af09f8fbe", "f09f918af09f8fbf", "f09fa49bf09f8fbb", "f09fa49bf09f8fbc", "f09fa49bf09f8fbd", "f09fa49bf09f8fbe", "f09fa49bf09f8fbf", "f09fa49cf09f8fbb", "f09fa49cf09f8fbc", "f09fa49cf09f8fbd", "f09fa49cf09f8fbe", "f09fa49cf09f8fbf", "f09fa49af09f8fbb", "f09fa49af09f8fbc", "f09fa49af09f8fbd", "f09fa49af09f8fbe", "f09fa49af09f8fbf", "f09f918bf09f8fbb", "f09f918bf09f8fbc", "f09f918bf09f8fbd", "f09f918bf09f8fbe", "f09f918bf09f8fbf", "f09fa49ff09f8fbb", "f09fa49ff09f8fbc", "f09fa49ff09f8fbd", "f09fa49ff09f8fbe", "f09fa49ff09f8fbf", "e29c8defb88ff09f8fbb", "e29c8df09f8fbb", "e29c8defb88ff09f8fbc", "e29c8df09f8fbc", "e29c8defb88ff09f8fbd", "e29c8df09f8fbd", "e29c8defb88ff09f8fbe", "e29c8df09f8fbe", "e29c8defb88ff09f8fbf", "e29c8df09f8fbf", "f09f918ff09f8fbb", "f09f918ff09f8fbc", "f09f918ff09f8fbd", "f09f918ff09f8fbe", "f09f918ff09f8fbf", "f09f9190f09f8fbb", "f09f9190f09f8fbc", "f09f9190f09f8fbd", "f09f9190f09f8fbe", "f09f9190f09f8fbf", "f09f998cf09f8fbb", "f09f998cf09f8fbc", "f09f998cf09f8fbd", "f09f998cf09f8fbe", "f09f998cf09f8fbf", "f09fa4b2f09f8fbb", "f09fa4b2f09f8fbc", "f09fa4b2f09f8fbd", "f09fa4b2f09f8fbe", "f09fa4b2f09f8fbf", "f09f998ff09f8fbb", "f09f998ff09f8fbc", "f09f998ff09f8fbd", "f09f998ff09f8fbe", "f09f998ff09f8fbf", "f09f9285f09f8fbb", "f09f9285f09f8fbc", "f09f9285f09f8fbd", "f09f9285f09f8fbe", "f09f9285f09f8fbf", "f09f9182f09f8fbb", "f09f9182f09f8fbc", "f09f9182f09f8fbd", "f09f9182f09f8fbe", "f09f9182f09f8fbf", "f09f9183f09f8fbb", "f09f9183f09f8fbc", "f09f9183f09f8fbd", "f09f9183f09f8fbe", "f09f9183f09f8fbf", "f09fa6b4", "f09fa6b7", "f09f97a8", "f09fa5bd", "f09fa5bc", "f09fa5be", "f09fa5bf", "f09fa69d", "f09fa699", "f09fa69b", "f09fa698", "f09fa6a1", "f09fa6a2", "f09fa69a", "f09fa69c", "f09fa69e", "f09fa69f", "f09fa6a0", "f09fa5ad", "f09fa5ac", "f09fa5af", "f09fa782", "f09fa5ae", "f09fa781", "f09fa7ad", "f09fa7b1", "f09f9bb9", "f09fa7b3", "f09fa7a8", "f09fa7a7", "f09fa58e", "f09fa58f", "f09fa58d", "f09fa7bf", "f09fa7a9", "f09fa7b8", "e2999f", "f09fa7b5", "f09fa7b6", "f09fa7ae", "f09fa7be", "f09fa7b0", "f09fa7b2", "f09fa7aa", "f09fa7ab", "f09fa7ac", "f09fa7b4", "f09fa7b7", "f09fa7b9", "f09fa7ba", "f09fa7bb", "f09fa7bc", "f09fa7bd", "f09fa7af", "e28f8f", "e29a95", "e299be", "23e2808de2808de283a3", "23e2808de283a3", "23e2808defb88fe2808de283a3", "23e283a3", "23efb88fe283a3", "0e2808de2808de283a3", "0e2808de283a3", "0e2808defb88fe2808de283a3", "0e283a3", "0efb88fe283a3", "1e2808de2808de283a3", "1e2808de283a3", "1e2808defb88fe2808de283a3", "1e283a3", "1efb88fe283a3", "2e2808de2808de283a3", "2e2808de283a3", "2e2808defb88fe2808de283a3", "2e283a3", "2efb88fe283a3", "3e2808de2808de283a3", "3e2808de283a3", "3e2808defb88fe2808de283a3", "3e283a3", "3efb88fe283a3", "4e2808de2808de283a3", "4e2808de283a3", "4e2808defb88fe2808de283a3", "4e283a3", "4efb88fe283a3", "5e2808de2808de283a3", "5e2808de283a3", "5e2808defb88fe2808de283a3", "5e283a3", "5efb88fe283a3", "6e2808de2808de283a3", "6e2808de283a3", "6e2808defb88fe2808de283a3", "6e283a3", "6efb88fe283a3", "7e2808de2808de283a3", "7e2808de283a3", "7e2808defb88fe2808de283a3", "7e283a3", "7efb88fe283a3", "8e2808de2808de283a3", "8e2808de283a3", "8e2808defb88fe2808de283a3", "8e283a3", "8efb88fe283a3", "9e2808de2808de283a3", "9e2808de283a3", "9e2808defb88fe2808de283a3", "9e283a3", "9efb88fe283a3", "f09f8fb4e2808de298a0", "f09f8fb4e2808de298a0efb88f", "f09f8fb4efb88fe2808de298a0", "f09f8fb4efb88fe2808de298a0efb88f", "f09f87a6e2808df09f87a8", "f09f87a6f09f87a8", "f09f87b8e2808df09f87ad", "f09f87b8f09f87ad", "f09f87b9e2808df09f87a6", "f09f87b9f09f87a6", "f09f87a6e2808df09f87a9", "f09f87a6f09f87a9", "f09f87a6e2808df09f87aa", "f09f87a6f09f87aa", "f09f87a6e2808df09f87ab", "f09f87a6f09f87ab", "f09f87a6e2808df09f87ac", "f09f87a6f09f87ac", "f09f87a6e2808df09f87ae", "f09f87a6f09f87ae", "f09f87a6e2808df09f87b1", "f09f87a6f09f87b1", "f09f87a6e2808df09f87b2", "f09f87a6f09f87b2", "f09f87a6e2808df09f87b4", "f09f87a6f09f87b4", "f09f87a6e2808df09f87b6", "f09f87a6f09f87b6", "f09f87a6e2808df09f87b7", "f09f87a6f09f87b7", "f09f87a6e2808df09f87b8", "f09f87a6f09f87b8", "f09f87a6e2808df09f87b9", "f09f87a6f09f87b9", "f09f87a6e2808df09f87ba", "f09f87a6f09f87ba", "f09f87ade2808df09f87b2", "f09f87adf09f87b2", "f09f87a6e2808df09f87bc", "f09f87a6f09f87bc", "f09f87a6e2808df09f87bd", "f09f87a6f09f87bd", "f09f87a6e2808df09f87bf", "f09f87a6f09f87bf", "f09f87a7e2808df09f87a6", "f09f87a7f09f87a6", "f09f87a7e2808df09f87a7", "f09f87a7f09f87a7", "f09f87a7e2808df09f87a9", "f09f87a7f09f87a9", "f09f87a7e2808df09f87aa", "f09f87a7f09f87aa", "f09f87a7e2808df09f87ab", "f09f87a7f09f87ab", "f09f87a7e2808df09f87ac", "f09f87a7f09f87ac", "f09f87a7e2808df09f87ad", "f09f87a7f09f87ad", "f09f87a7e2808df09f87ae", "f09f87a7f09f87ae", "f09f87a7e2808df09f87af", "f09f87a7f09f87af", "f09f87a7e2808df09f87b1", "f09f87a7f09f87b1", "f09f87a7e2808df09f87b2", "f09f87a7f09f87b2", "f09f87a7e2808df09f87b3", "f09f87a7f09f87b3", "f09f87a7e2808df09f87b4", "f09f87a7f09f87b4", "f09f87a7e2808df09f87b6", "f09f87a7f09f87b6", "f09f87a7e2808df09f87b7", "f09f87a7f09f87b7", "f09f87a7e2808df09f87b8", "f09f87a7f09f87b8", "f09f87a7e2808df09f87b9", "f09f87a7f09f87b9", "f09f87a7e2808df09f87bb", "f09f87a7f09f87bb", "f09f87b3e2808df09f87b4", "f09f87b3f09f87b4", "f09f87b8e2808df09f87af", "f09f87b8f09f87af", "f09f87a7e2808df09f87bc", "f09f87a7f09f87bc", "f09f87a7e2808df09f87be", "f09f87a7f09f87be", "f09f87a7e2808df09f87bf", "f09f87a7f09f87bf", "f09f87a8e2808df09f87a6", "f09f87a8f09f87a6", "f09f87a8e2808df09f87a8", "f09f87a8f09f87a8", "f09f87a8e2808df09f87a9", "f09f87a8f09f87a9", "f09f87a8e2808df09f87ab", "f09f87a8f09f87ab", "f09f87a8e2808df09f87ac", "f09f87a8f09f87ac", "f09f87a8e2808df09f87ad", "f09f87a8f09f87ad", "f09f87a8e2808df09f87ae", "f09f87a8f09f87ae", "f09f87a8e2808df09f87b0", "f09f87a8f09f87b0", "f09f87a8e2808df09f87b1", "f09f87a8f09f87b1", "f09f87a8e2808df09f87b2", "f09f87a8f09f87b2", "f09f87a8e2808df09f87b3", "f09f87a8f09f87b3", "f09f87a8e2808df09f87b4", "f09f87a8f09f87b4", "f09f87a8e2808df09f87b5", "f09f87a8f09f87b5", "f09f87abe2808df09f87b7", "f09f87abf09f87b7", "f09f87b2e2808df09f87ab", "f09f87b2f09f87ab", "f09f87a8e2808df09f87b7", "f09f87a8f09f87b7", "f09f87a8e2808df09f87ba", "f09f87a8f09f87ba", "f09f87a8e2808df09f87bb", "f09f87a8f09f87bb", "f09f87a8e2808df09f87bc", "f09f87a8f09f87bc", "f09f87a8e2808df09f87bd", "f09f87a8f09f87bd", "f09f87a8e2808df09f87be", "f09f87a8f09f87be", "f09f87a8e2808df09f87bf", "f09f87a8f09f87bf", "f09f87a9e2808df09f87aa", "f09f87a9f09f87aa", "f09f87a9e2808df09f87ac", "f09f87a9f09f87ac", "f09f87aee2808df09f87b4", "f09f87aef09f87b4", "f09f87a9e2808df09f87af", "f09f87a9f09f87af", "f09f87a9e2808df09f87b0", "f09f87a9f09f87b0", "f09f87a9e2808df09f87b2", "f09f87a9f09f87b2", "f09f87a9e2808df09f87b4", "f09f87a9f09f87b4", "f09f87a9e2808df09f87bf", "f09f87a9f09f87bf", "f09f87aae2808df09f87a6", "f09f87aae2808df09f87b8", "f09f87aaf09f87a6", "f09f87aaf09f87b8", "f09f87aae2808df09f87a8", "f09f87aaf09f87a8", "f09f87aae2808df09f87aa", "f09f87aaf09f87aa", "f09f87aae2808df09f87ac", "f09f87aaf09f87ac", "f09f87aae2808df09f87ad", "f09f87aaf09f87ad", "f09f87aae2808df09f87b7", "f09f87aaf09f87b7", "f09f87aae2808df09f87b9", "f09f87aaf09f87b9", "f09f87aae2808df09f87ba", "f09f87aaf09f87ba", "f09f87abe2808df09f87ae", "f09f87abf09f87ae", "f09f87abe2808df09f87af", "f09f87abf09f87af", "f09f87abe2808df09f87b0", "f09f87abf09f87b0", "f09f87abe2808df09f87b2", "f09f87abf09f87b2", "f09f87abe2808df09f87b4", "f09f87abf09f87b4", "f09f87ace2808df09f87a6", "f09f87acf09f87a6", "f09f87ace2808df09f87a7", "f09f87acf09f87a7", "f09f87ace2808df09f87a9", "f09f87acf09f87a9", "f09f87ace2808df09f87aa", "f09f87acf09f87aa", "f09f87ace2808df09f87ab", "f09f87acf09f87ab", "f09f87ace2808df09f87ac", "f09f87acf09f87ac", "f09f87ace2808df09f87ad", "f09f87acf09f87ad", "f09f87ace2808df09f87ae", "f09f87acf09f87ae", "f09f87ace2808df09f87b1", "f09f87acf09f87b1", "f09f87ace2808df09f87b2", "f09f87acf09f87b2", "f09f87ace2808df09f87b3", "f09f87acf09f87b3", "f09f87ace2808df09f87b5", "f09f87acf09f87b5", "f09f87ace2808df09f87b6", "f09f87acf09f87b6", "f09f87ace2808df09f87b7", "f09f87acf09f87b7", "f09f87ace2808df09f87b8", "f09f87acf09f87b8", "f09f87ace2808df09f87b9", "f09f87acf09f87b9", "f09f87ace2808df09f87ba", "f09f87acf09f87ba", "f09f87ace2808df09f87bc", "f09f87acf09f87bc", "f09f87ace2808df09f87be", "f09f87acf09f87be", "f09f87ade2808df09f87b0", "f09f87adf09f87b0", "f09f87ade2808df09f87b3", "f09f87adf09f87b3", "f09f87ade2808df09f87b7", "f09f87adf09f87b7", "f09f87ade2808df09f87b9", "f09f87adf09f87b9", "f09f87ade2808df09f87ba", "f09f87adf09f87ba", "f09f87aee2808df09f87a8", "f09f87aef09f87a8", "f09f87aee2808df09f87a9", "f09f87aef09f87a9", "f09f87aee2808df09f87aa", "f09f87aef09f87aa", "f09f87aee2808df09f87b1", "f09f87aef09f87b1", "f09f87aee2808df09f87b2", "f09f87aef09f87b2", "f09f87aee2808df09f87b3", "f09f87aef09f87b3", "f09f87aee2808df09f87b6", "f09f87aef09f87b6", "f09f87aee2808df09f87b7", "f09f87aef09f87b7", "f09f87aee2808df09f87b8", "f09f87aef09f87b8", "f09f87aee2808df09f87b9", "f09f87aef09f87b9", "f09f87afe2808df09f87aa", "f09f87aff09f87aa", "f09f87afe2808df09f87b2", "f09f87aff09f87b2", "f09f87afe2808df09f87b4", "f09f87aff09f87b4", "f09f87afe2808df09f87b5", "f09f87aff09f87b5", "f09f87b0e2808df09f87aa", "f09f87b0f09f87aa", "f09f87b0e2808df09f87ac", "f09f87b0f09f87ac", "f09f87b0e2808df09f87ad", "f09f87b0f09f87ad", "f09f87b0e2808df09f87ae", "f09f87b0f09f87ae", "f09f87b0e2808df09f87b2", "f09f87b0f09f87b2", "f09f87b0e2808df09f87b3", "f09f87b0f09f87b3", "f09f87b0e2808df09f87b5", "f09f87b0f09f87b5", "f09f87b0e2808df09f87b7", "f09f87b0f09f87b7", "f09f87b0e2808df09f87bc", "f09f87b0f09f87bc", "f09f87b0e2808df09f87be", "f09f87b0f09f87be", "f09f87b0e2808df09f87bf", "f09f87b0f09f87bf", "f09f87b1e2808df09f87a6", "f09f87b1f09f87a6", "f09f87b1e2808df09f87a7", "f09f87b1f09f87a7", "f09f87b1e2808df09f87a8", "f09f87b1f09f87a8", "f09f87b1e2808df09f87ae", "f09f87b1f09f87ae", "f09f87b1e2808df09f87b0", "f09f87b1f09f87b0", "f09f87b1e2808df09f87b7", "f09f87b1f09f87b7", "f09f87b1e2808df09f87b8", "f09f87b1f09f87b8", "f09f87b1e2808df09f87b9", "f09f87b1f09f87b9", "f09f87b1e2808df09f87ba", "f09f87b1f09f87ba", "f09f87b1e2808df09f87bb", "f09f87b1f09f87bb", "f09f87b1e2808df09f87be", "f09f87b1f09f87be", "f09f87b2e2808df09f87a6", "f09f87b2f09f87a6", "f09f87b2e2808df09f87a8", "f09f87b2f09f87a8", "f09f87b2e2808df09f87a9", "f09f87b2f09f87a9", "f09f87b2e2808df09f87aa", "f09f87b2f09f87aa", "f09f87b2e2808df09f87ac", "f09f87b2f09f87ac", "f09f87b2e2808df09f87ad", "f09f87b2f09f87ad", "f09f87b2e2808df09f87b0", "f09f87b2f09f87b0", "f09f87b2e2808df09f87b1", "f09f87b2f09f87b1", "f09f87b2e2808df09f87b2", "f09f87b2f09f87b2", "f09f87b2e2808df09f87b3", "f09f87b2f09f87b3", "f09f87b2e2808df09f87b4", "f09f87b2f09f87b4", "f09f87b2e2808df09f87b5", "f09f87b2f09f87b5", "f09f87b2e2808df09f87b6", "f09f87b2f09f87b6", "f09f87b2e2808df09f87b7", "f09f87b2f09f87b7", "f09f87b2e2808df09f87b8", "f09f87b2f09f87b8", "f09f87b2e2808df09f87b9", "f09f87b2f09f87b9", "f09f87b2e2808df09f87ba", "f09f87b2f09f87ba", "f09f87b2e2808df09f87bb", "f09f87b2f09f87bb", "f09f87b2e2808df09f87bc", "f09f87b2f09f87bc", "f09f87b2e2808df09f87bd", "f09f87b2f09f87bd", "f09f87b2e2808df09f87be", "f09f87b2f09f87be", "f09f87b2e2808df09f87bf", "f09f87b2f09f87bf", "f09f87b3e2808df09f87a6", "f09f87b3f09f87a6", "f09f87b3e2808df09f87a8", "f09f87b3f09f87a8", "f09f87b3e2808df09f87aa", "f09f87b3f09f87aa", "f09f87b3e2808df09f87ab", "f09f87b3f09f87ab", "f09f87b3e2808df09f87ac", "f09f87b3f09f87ac", "f09f87b3e2808df09f87ae", "f09f87b3f09f87ae", "f09f87b3e2808df09f87b1", "f09f87b3f09f87b1", "f09f87b3e2808df09f87b5", "f09f87b3f09f87b5", "f09f87b3e2808df09f87b7", "f09f87b3f09f87b7", "f09f87b3e2808df09f87ba", "f09f87b3f09f87ba", "f09f87b3e2808df09f87bf", "f09f87b3f09f87bf", "f09f87b4e2808df09f87b2", "f09f87b4f09f87b2", "f09f87b5e2808df09f87a6", "f09f87b5f09f87a6", "f09f87b5e2808df09f87aa", "f09f87b5f09f87aa", "f09f87b5e2808df09f87ab", "f09f87b5f09f87ab", "f09f87b5e2808df09f87ac", "f09f87b5f09f87ac", "f09f87b5e2808df09f87ad", "f09f87b5f09f87ad", "f09f87b5e2808df09f87b0", "f09f87b5f09f87b0", "f09f87b5e2808df09f87b1", "f09f87b5f09f87b1", "f09f87b5e2808df09f87b2", "f09f87b5f09f87b2", "f09f87b5e2808df09f87b3", "f09f87b5f09f87b3", "f09f87b5e2808df09f87b7", "f09f87b5f09f87b7", "f09f87b5e2808df09f87b8", "f09f87b5f09f87b8", "f09f87b5e2808df09f87b9", "f09f87b5f09f87b9", "f09f87b5e2808df09f87bc", "f09f87b5f09f87bc", "f09f87b5e2808df09f87be", "f09f87b5f09f87be", "f09f87b6e2808df09f87a6", "f09f87b6f09f87a6", "f09f87b7e2808df09f87aa", "f09f87b7f09f87aa", "f09f87b7e2808df09f87b4", "f09f87b7f09f87b4", "f09f87b7e2808df09f87b8", "f09f87b7f09f87b8", "f09f87b7e2808df09f87ba", "f09f87b7f09f87ba", "f09f87b7e2808df09f87bc", "f09f87b7f09f87bc", "f09f87b8e2808df09f87a6", "f09f87b8f09f87a6", "f09f87b8e2808df09f87a7", "f09f87b8f09f87a7", "f09f87b8e2808df09f87a8", "f09f87b8f09f87a8", "f09f87b8e2808df09f87a9", "f09f87b8f09f87a9", "f09f87b8e2808df09f87aa", "f09f87b8f09f87aa", "f09f87b8e2808df09f87ac", "f09f87b8f09f87ac", "f09f87b8e2808df09f87ae", "f09f87b8f09f87ae", "f09f87b8e2808df09f87b0", "f09f87b8f09f87b0", "f09f87b8e2808df09f87b1", "f09f87b8f09f87b1", "f09f87b8e2808df09f87b2", "f09f87b8f09f87b2", "f09f87b8e2808df09f87b3", "f09f87b8f09f87b3", "f09f87b8e2808df09f87b4", "f09f87b8f09f87b4", "f09f87b8e2808df09f87b7", "f09f87b8f09f87b7", "f09f87b8e2808df09f87b8", "f09f87b8f09f87b8", "f09f87b8e2808df09f87b9", "f09f87b8f09f87b9", "f09f87b8e2808df09f87bb", "f09f87b8f09f87bb", "f09f87b8e2808df09f87bd", "f09f87b8f09f87bd", "f09f87b8e2808df09f87be", "f09f87b8f09f87be", "f09f87b8e2808df09f87bf", "f09f87b8f09f87bf", "f09f87b9e2808df09f87a8", "f09f87b9f09f87a8", "f09f87b9e2808df09f87a9", "f09f87b9f09f87a9", "f09f87b9e2808df09f87ab", "f09f87b9f09f87ab", "f09f87b9e2808df09f87ac", "f09f87b9f09f87ac", "f09f87b9e2808df09f87ad", "f09f87b9f09f87ad", "f09f87b9e2808df09f87af", "f09f87b9f09f87af", "f09f87b9e2808df09f87b0", "f09f87b9f09f87b0", "f09f87b9e2808df09f87b1", "f09f87b9f09f87b1", "f09f87b9e2808df09f87b2", "f09f87b9f09f87b2", "f09f87b9e2808df09f87b3", "f09f87b9f09f87b3", "f09f87b9e2808df09f87b4", "f09f87b9f09f87b4", "f09f87b9e2808df09f87b7", "f09f87b9f09f87b7", "f09f87b9e2808df09f87b9", "f09f87b9f09f87b9", "f09f87b9e2808df09f87bb", "f09f87b9f09f87bb", "f09f87b9e2808df09f87bc", "f09f87b9f09f87bc", "f09f87b9e2808df09f87bf", "f09f87b9f09f87bf", "f09f87bae2808df09f87a6", "f09f87baf09f87a6", "f09f87bae2808df09f87ac", "f09f87baf09f87ac", "f09f87bae2808df09f87b2", "f09f87bae2808df09f87b8", "f09f87baf09f87b2", "f09f87baf09f87b8", "f09f87bae2808df09f87b3", "f09f87baf09f87b3", "f09f87bae2808df09f87be", "f09f87baf09f87be", "f09f87bae2808df09f87bf", "f09f87baf09f87bf", "f09f87bbe2808df09f87a6", "f09f87bbf09f87a6", "f09f87bbe2808df09f87a8", "f09f87bbf09f87a8", "f09f87bbe2808df09f87aa", "f09f87bbf09f87aa", "f09f87bbe2808df09f87ac", "f09f87bbf09f87ac", "f09f87bbe2808df09f87ae", "f09f87bbf09f87ae", "f09f87bbe2808df09f87b3", "f09f87bbf09f87b3", "f09f87bbe2808df09f87ba", "f09f87bbf09f87ba", "f09f87bce2808df09f87ab", "f09f87bcf09f87ab", "f09f87bce2808df09f87b8", "f09f87bcf09f87b8", "f09f87bde2808df09f87b0", "f09f87bdf09f87b0", "f09f87bee2808df09f87aa", "f09f87bef09f87aa", "f09f87bee2808df09f87b9", "f09f87bef09f87b9", "f09f87bfe2808df09f87a6", "f09f87bff09f87a6", "f09f87bfe2808df09f87b2", "f09f87bff09f87b2", "f09f87bfe2808df09f87bc", "f09f87bff09f87bc", "f09f8fb4e2808df3a081a7e2808df3a081a2e2808df3a081a5e2808df3a081aee2808df3a081a7e2808df3a081bf", "f09f8fb4f3a081a7f3a081a2f3a081a5f3a081aef3a081a7f3a081bf", "f09f8fb4e2808df3a081a7e2808df3a081a2e2808df3a081b3e2808df3a081a3e2808df3a081b4e2808df3a081bf", "f09f8fb4f3a081a7f3a081a2f3a081b3f3a081a3f3a081b4f3a081bf", "f09f8fb4e2808df3a081a7e2808df3a081a2e2808df3a081b7e2808df3a081ace2808df3a081b3e2808df3a081bf", "f09f8fb4f3a081a7f3a081a2f3a081b7f3a081acf3a081b3f3a081bf"];
                const peerid = new URLSearchParams(window.location.search).get('sel')
                const emojibtndata = `<a id="emojipopup" style="margin-left: 240px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMRSURBVDhPXZPLbxNXFMZ/c8exjeOHiBMHSJOQhyABgYLojtcCqGirSlWEEJvuygIikPgLWnXRdoEAIUAIgkBCahYsEEi8BAi1aheorVSrKY5FcGxCHB7Ow2MHe2zPTM8MCAmOdHTvPef7zj3fnTOa8yMf2zoU36Lzuaw9XsQig80d8VE5PfZi78wrcP4ROzSNHxyH7S0h2Lt/J2zYB7E+cARlTGIlx7g69iuGKSSNh4L9XjK/eQUu/cNU9+DQymj35kBzLErH4BDRVR2C9C6RIhrF59Pk00mWFg1Kub/MbCo5I5k+7dHlw3tbVm+6mhjYRrith/LrKV5N/EFba4VYR8LjF6dfUlgMk1i7heZ4F0uvM6TunnZTw8qxrZ/a1m4l2t6PUrq3Jga2MJV+CvVXnk+lMxLbSiTRi9J9RFasYc1nIzh2/WdVc/SeZrnZFlGuayIw1LqaslEDc9rzUqlGKN79ASYs57pwVbBhNPLZxyyWSp7PFYvksymCfhsq0kU1Q0D2s7mJDzAzz9IEGyVbP/Zl8bsn1S5lWjomTSzkMxQm/2R97BZ++64UGSeiK57k45i2YBwfCzNPyf3+C0PObfmM5zCN7t3+f1/0UjYDhIM1NnTmiC5PyvfPe4+Ivori/BDjz7soV/1EgiYb2zOEs/fKmnOWFH2DA+ii2ReEZc0Q0EEZYC+8LaCWyz4i72FJR2+gURX3Qyb1n6IhE1aYhEXRa6QEJERH9CufFBRSU1jmoUkKCLkqORfjYueE0+C+kjG9SKluMSc31YVoyw0SvHIyyfTEvGxlFC2LmfQLroym32JcrMuxGHUluHaGAIdol11LP0RizFd2cP38CSZT7ixD/0ATw9+MECufhJcSMHGZI5ojZxlZP7HOm8Sju1gh7UrnBFogvEdkfCIHkVMvwOwtyLntLz3AePaFJGratbFTssLX80f8tH56nEjgINGKIpSTItKr20AtDm86RX/IpmReoPD3UYlWXJ52Y+yYu763rxqn1+PTDmDP7kFVeyVUww5mUSvv03Dc33ncA3oG/wO7J1k2UioyHQAAAABJRU5ErkJggg==""></a>`
    const attachbtndata = `<a id="attachpopup" style="margin-left: 10px;"><img src="data:image/gif;base64,R0lGODlhEAAQAPZFAKvA1JKVl5CUljY2ODk5Oz+KJDB5FtHa5I3GOYmNj7rbhlqDrI+qxb/N27HF1mhqbHFzdSFnCIGEhk6bMnl8fnOXubTF16a80UaSK3d6fIOHiTiBHff392BiZClwD2ptb09QUlhZW0dISpeYmpOuyK/C1X5+gKzB1EVJUF5gYsnU4LjI2bfH2FJTVT8/QbvK2paYmZeyy7rJ2p62zZexyfLy8rXG2Ki90bTG193txL3L273M27PF17XH2KO50ZubnIWjwaS50J+foHOVt6/D1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAAEUALAAAAAAQABAAQAesgEVFAYSFhoYdNSk9LDI6DRYxRDAcIzUgEjUCm5ydNZkQLjWjpDUcGwoKCKkbh66FnxA1GQe1ByoODjgZNbIdIDUoQwvECwzHGDkYNUKCzs+CHggezwml16QJ1tjX1hQUNRoHDTwXPhc3ABo14A8PNR8nJQ4WNisvOx817yEhNS0NgtAgAaRChRkTEtYQIaIGgYcQTRSYiGBigQEYM2L8YaAjgo4GoImMQFJQIAA7""></a>`
    sendbtn.insertAdjacentHTML('afterend', attachbtndata);
                sendbtn.insertAdjacentHTML('afterend', emojibtndata);
                const imgpopup = document.createElement('script');
                imgpopup.textContent = `
u(document).on("click", "#attachpopup", async (e) => {
    window.phid = ''
    const photos_per_page = 23
    const form = u(e.target).closest('form')
    const club = Number(e.currentTarget.dataset.club ?? 0)
    const msg = new CMessageBox({
        title: \`${tr('select_photo')}<text style="font-size: 10px;"> ${localization.selectphsmall}</text>\`,
        body: \`
        <div class='attachment_selector'>
            <div class="topGrayBlock display_flex_row">
                <label>
                    <input type="file" multiple accept="image/*" id="__pickerQuickUpload" style="display:none">
                    <input type="button" class="button" value="\${tr("upload_button")}" onclick="__pickerQuickUpload.click()">
                </label>

                <select id="albumSelect">
                    <option value="0">\${tr("all_photos")}</option>
                </select>
            </div>
            <div id='attachment_insert'>
                <div id='attachment_insert_count'>
                    <h4>\${tr("is_x_photos", 0)}</h4>
                </div>
                <div class="photosList album-flex"></div>
            </div>
        </div>
        \`,
        buttons: [tr('send'), tr('close')],
        callbacks: [
            async () => {
                if (window.phid !== '') {
                   const textarea = document.querySelector('textarea[data-bind="value: messageContent, event: { keydown: onTextareaKeyPress }"][name="message"]');
                   if (textarea !== null && textarea.value !== "") {
                      var attachment_msg = textarea.value;
                   }
                   else {
                      var attachment_msg = "";
                   }
                    try {
                        await window.OVKAPI.call("messages.send", {"attachment": window.phid, "peer_id": ${peerid}, "message": attachment_msg});
                        location.reload();
                    } catch (error) {
                        console.error("attachment sending err:", error);
                        alert("чота фотка не отправляется, проверьте консоль.");
                    }
                } else {
                    alert('да ты дурак выбери фото');
                }
            },
            () => {
                msg.close();
            }
        ]
    })

    msg.getNode().attr('style', 'width: 630px;')
    msg.getNode().find('.ovk-diag-body').attr('style', 'height:335px;padding:0px;')

    async function __recievePhotos(page, album = 0) {
        u('#gif_loader').remove()
        u('#attachment_insert').append(\`<div id='gif_loader'></div>\`)
        const insert_place = u('#attachment_insert .photosList')
        let photos = null

        try {
            if(album == 0) {
                photos = await window.OVKAPI.call('photos.getAll', {'owner_id': window.openvk.current_id, 'photo_sizes': 1, 'count': photos_per_page, 'offset': page * photos_per_page})
            } else {
                photos = await window.OVKAPI.call('photos.get', {'owner_id': window.openvk.current_id, 'album_id': album, 'photo_sizes': 1, 'count': photos_per_page, 'offset': page * photos_per_page})
            }
        } catch(e) {
            u("#attachment_insert_count h4").html(tr("is_x_photos", -1))
            u("#gif_loader").remove()
            insert_place.html("Invalid album")
            return
        }

        u("#attachment_insert_count h4").html(tr("is_x_photos", photos.count))
        u("#gif_loader").remove()
        const pages_count = Math.ceil(Number(photos.count) / photos_per_page)
        photos.items.forEach(photo => {
            const is_attached = (form.find(\`.upload-item[data-type='photo'][data-id='\${photo.owner_id}_\${photo.id}']\`)).length > 0
            insert_place.append(\`
                <a class="album-photo\${is_attached ? ' selected' : ''}" data-attachmentdata="\${photo.owner_id}_\${photo.id}" data-preview="\${photo.photo_130}" href="/photo\${photo.owner_id}_\${photo.id}">
                    <img class="album-photo--image" src="\${photo.photo_130}" alt="...">
                </a>
            \`)
        })

        if(page < pages_count - 1) {
            insert_place.append(\`
            <div id="show_more" data-pagesCount="\${pages_count}" data-page="\${page + 1}">
                <span>\${tr('show_more')}</span>
            </div>\`)
        }
    }

    // change album
    u('.ovk-diag-body .attachment_selector').on("change", ".topGrayBlock #albumSelect", (ev) => {
        u("#attachment_insert .photosList").html('')

        __recievePhotos(0, ev.target.value)
    })

    // next page
    u(".ovk-diag-body .attachment_selector").on("click", "#show_more", async (ev) => {
        const target = u(ev.target).closest('#show_more')
        target.addClass('lagged')
        await __recievePhotos(Number(target.nodes[0].dataset.page), u(".topGrayBlock #albumSelect").nodes[0].value)
        target.remove()
    })

    // add photo
u(".ovk-diag-body .attachment_selector").on("click", ".album-photo", async (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const target = u(ev.target).closest('.album-photo');
    const dataset = target.nodes[0].dataset;
    const ph_id = "photo"+dataset.attachmentdata;
    let phArray = window.phid.split(',').filter(Boolean);
    const index = phArray.indexOf(ph_id);

    if (index === -1) {
        target.addClass('selected');
        phArray.push(ph_id);
    } else {
        target.removeClass('selected');
        phArray.splice(index, 1);
    }

    window.phid = phArray.join(',');

    document.querySelector(".ovk-diag").querySelectorAll('.album-photo').forEach((element) => {
        const elementPhid = "photo"+element.dataset.attachmentdata;
        if (!phArray.includes(elementPhid)) {
            element.classList.remove('selected');
        }
    });
});

    // "upload" button
    u(".ovk-diag-body #__pickerQuickUpload").on('change', (ev) => {
        for(file of ev.target.files) {
            try {
                __uploadToTextarea(file, form)
            } catch(e) {
                makeError(e.message)
                return
            }
        }

        msg.close()
    })

    __recievePhotos(0)
    if(!window.openvk.photoalbums) {
        window.openvk.photoalbums = await window.OVKAPI.call('photos.getAlbums', {'owner_id': club != 0 ? Math.abs(club) * -1 : window.openvk.current_id})
    }
    window.openvk.photoalbums.items.forEach(item => {
        u('.ovk-diag-body #albumSelect').append(\`<option value="\${item.vid}">\${ovk_proc_strtr(escapeHtml(item.title), 20)}</option>\`)
    })
})
    `;
        document.body.appendChild(imgpopup);
        const emojibtn = document.querySelector('#emojipopup');
        const textarea = document.querySelector('textarea[data-bind="value: messageContent, event: { keydown: onTextareaKeyPress }"][name="message"]');
        const pickerContent = document.createElement('div');
        pickerContent.className = 'emoji-picker';
        pickerContent.style.cssText = 'display:flex;flex-wrap:wrap;width:300px;padding:10px';
        emojis.forEach(code => {
            const emojiSym = UnicodeToText(code);
            const emoji = document.createElement('div');
            emoji.className = `emoji @${code}`;
            emoji.style.cssText = 'width:16px;height:16px;margin:4px;cursor:pointer;';
            emoji.onclick = () => simkeypress(emojiSym, textarea);
            pickerContent.appendChild(emoji);
        });
        tippy(emojibtn, {
            content: pickerContent,
            allowHTML: true,
            interactive: true,
            placement: 'top',
            theme: 'light',
            maxHeight: '200px',
            width: '300px',
            onShow(instance) {
                const content = instance.popper.querySelector('.tippy-content');
                content.style.overflow = 'auto';
                content.style.overflowX = 'hidden';
                content.style.maxHeight = '200px';
            }
        });
    }
    window.messages.subscribe(function(newMessages) {
        vkifyEmoji();
    }, null, 'arrayChange');
}
        if (enable_vk2012 == 'true') {
            var hdraudiobtn = `<div class="link" id="headerMusicLinkDiv" style="padding-right: 35px;">
                   <div onmousedown="this.classList.add('pressed')" onmouseup="this.classList.remove('pressed')" class="headerMusicBtn paused" id="headerMusicBtn"></div><a style="color: #FFFFFF;">${localization.headmusic}</a></div>`
    } else {
        var hdraudiobtn = ``
    }
        if (faviconrepl == 'true') {
            if (window.location.href.includes('im?sel=')) {
                document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz//////7+ghP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////v6CE/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////////////////////////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////////////////////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////////////////////////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz///////////////////////////////////////////+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////////////////////////////////////q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////////////////////////////////////6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAA+LwAAc3QAAHQ6AABhbgAAZD4AACAgAAAgIAAAICAAACAgAAByZAAAbGkAACAgAAAgIAAAICAAADwvAABmOg==")
            } else {
                document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon[Number(faviconreplt)])
            }
        }
        /* замена счётчиков новых сообщений/уведомлений/etc. */
        document.querySelectorAll('object[type="internal/link"]').forEach(obj => {
            const boldElement = obj.querySelector('b');
            if (boldElement && !isNaN(boldElement.textContent)) {
                const number = boldElement.textContent;
                obj.innerHTML = `+${number}`;
            }
        });
        /* переопределяем функцию замены фавикона, потому что я так захотел */
        if (faviconrepl == 'true') {
            player.__setFavicon = function (state = 'playing') {
                if(state == 'playing') {
                    if (Number(faviconreplt) === 1) {
                        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["play"])
                    } else {
                        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["new_play"])
                    }

                } else {
                    if (Number(faviconreplt) === 1) {
                        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["pause"])
                    } else {
                        document.querySelector('link[rel="icon"], link[rel="shortcut icon"]').setAttribute("href", vkfavicon["new_pause"])
                    }
                }
            }
        }
        async function parseGifts() {
            if (gifts_enabled == 'true'){
                try {
                    const gift_data = await window.OVKAPI.call("gifts.get", {"user_id": window.openvk.current_id, "count": 1});
                    if (!gift_data == "") {
                        if (!gift_data[0] == "") {
                            const gift_sender = await window.OVKAPI.call("users.get", {"user_ids": gift_data[0]["from_id"]});
                            window.lastgift = `<div id="news">
                                <b>${tr('gift')}</b>
                                <hr size="1">
                                <img src="${gift_data[0]["gift"]["thumb_96"]}" style="width: 100%;">
                                <text>${tr('sender')}: <a href="/id${gift_sender[0]["id"]}">${gift_sender[0]["first_name"]} ${gift_sender[0]["last_name"]}</a></text>
                                <br>
                            </div>`
                const newsDiv = document.querySelector('#news');
                    if (newsDiv) {
                        newsDiv.insertAdjacentHTML('afterend', window.lastgift);
                    }
                }
            }
        } catch (error) {
            console.error('подарочки не грузяца:', error);
            return null;
        }
        }
    }
        parseGifts();
        const page_header = document.querySelector('.page_header');
        if (page_header) {
            const headerData = `<a href="/" class="home_button" title="${localization.vknaming}"></a>
                <div class="header_navigation">
<div class="link header_divider_stick" id="search_box">
                                <div id="search_box_fr">
                                    <form id="search_form" action="/search" method="get">
                                        <div id="search_and_one_more_wrapper">
                                            <input autocomplete="off" type="search" maxlength="79" name="q" placeholder="${tr("header_search")}" title="${tr("header_search")} [Alt+Shift+F]" accesskey="f">
                                            ${enable_vk2012 == 'true' && onlinea == 'true' ? `<a class="friendslink" href="/friends${ovkuserid}?act=online" style="transform: translateX(-44px) translateY(2px);width: 43px;"><div class="friends_online">0</div></a>` : ``}

                                        </div>
                                        <button class="search_box_button">
                                            <span>${tr("header_search")}</span>
                                        </button>
                                    </form>
                                </div>
                                <div id="searchBoxFastTips"></div>
                            </div>
                            <div class="link">
                                <a href="/search?q=&section=users">${localization.headpeople}</a>
                            </div><div class="link">
                                <a href="/search?section=groups">${localization.headgroups}</a>
                            </div>
                            <div class="link">
                                <a href="/apps?act=list">${localization.headgames} </a>
                            </div>
                            ${hdraudiobtn}
                            <div class="link">
                                <a href="/support">${localization.headsupport} </a>
                            </div>
                            <div class="link">
                                <a href="/logout?hash=${encodeURIComponent(csrfToken)}">${localization.headlogout}</a>
                            </div>
                </div>`;
            page_header.innerHTML = headerData;
            const searchbox = document.querySelector('#search_box form input[type="search"]');
            var searchTimeout;
            searchbox.onfocus = function() {if (!(searchbox.value.length < 3)) {document.querySelector('#searchBoxFastTips').style.display = "block";}
                                            else {document.querySelector('#searchBoxFastTips').style.display = "none";}}
            searchbox.onblur = function() {
                if (searchbox.value == "") {document.querySelector('.friendslink').style.display = "unset";}
                else {document.querySelector('.friendslink').style.display = "none";}}
            searchbox.oninput = async function() {
                if (!(searchbox.value.length < 3)) {document.querySelector('#searchBoxFastTips').style.display = "block";
                                                    document.querySelector('.friendslink').style.display = "none";
                                                    clearTimeout(searchTimeout);
                                                    searchTimeout = setTimeout(async () => {
                                                        const srq = document.querySelector('#search_box form input[type="search"]').value;
                                                        document.querySelector('#searchBoxFastTips').innerHTML = `<div class="fastpreload"></div>`;
                                                        try {
                                                        const groupsd = await window.OVKAPI.call("groups.search", {"q": srq})
                                                        const usersd = await window.OVKAPI.call("users.search", {"q": srq, "fields": "photo_50"})
                                                        const audiosd = await window.OVKAPI.call("audio.search", {"q": srq})
                                                        const docsd = await window.OVKAPI.call("docs.search", {"q": srq})
                                                        if (usersd.count > 5 ) {
                                                            var minusers = usersd.items
                                                            .slice(0, 5)
                                                            .map(item => ({
                                                                id: item.id,
                                                                photo_50: item.photo_50,
                                                                first_name: item.first_name
                                                            }));
                                                        } else {
                                                            var minusers = usersd.items
                                                            .slice(0, usersd.count)
                                                            .map(item => ({
                                                                id: item.id,
                                                                photo_50: item.photo_50,
                                                                first_name: item.first_name
                                                            }));
                                                        }
                                                        let fastusers = ""
                                                        minusers.forEach((user, index) => {
                                                            fastusers += `
                                                                        <a class="fastavatarlnk" href="/id${user.id}">
                                                                          <img class="fastavatar" src="${user.photo_50}">
                                                                          <span>${escapeHtml(user.first_name)}</span>
                                                                        </a>
                                                                      `;
                                                        });
                                                        document.querySelector('#searchBoxFastTips').innerHTML = `
                                            <div>
                                                <div class="useravas">
                                                    ${fastusers}
                                                </div>
                                                <a href="/search?section=users&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('users')} <b>${escapeHtml(srq)}</b> (${usersd.count})
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=groups&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('groups')} <b>${escapeHtml(srq)}</b> (${groupsd.count})
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=audios&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('audios')} <b>${escapeHtml(srq)}</b> (${audiosd.count})
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=docs&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('documents')} <b>${escapeHtml(srq)}</b> (${docsd.count})
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                        `} catch (error) {
                                            console.error('failed to load search tip results, using simple template:', error)
                                            document.querySelector('#searchBoxFastTips').innerHTML = `
                                            <div>
                                                <a href="/search?section=users&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('users')} <b>${escapeHtml(srq)}</b>
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=groups&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('groups')} <b>${escapeHtml(srq)}</b>
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=audios&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('audios')} <b>${escapeHtml(srq)}</b>
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/search?section=docs&q=${srq}">
                                                    <div class="fastresult">
                                                        ${tr('documents')} <b>${escapeHtml(srq)}</b>
                                                        <div class="arrow"></div>
                                                    </div>
                                                </a>
                                            </div>
                                        `}
                                                    }, 1500);}
                else {document.querySelector('#searchBoxFastTips').style.display = "none";
                     document.querySelector('.friendslink').style.display = "unset";}}
            /* я украл эту хрень из исходников, хз как оно работает лол */
            u(`#search_box form input[type="search"]` || `#search_box #searchBoxFastTips a`).on('blur', (e) => { {
                setTimeout(() => {
                    const focusedElement = document.activeElement;

                    if (!u(focusedElement).is('#search_box form input[type="search"]')) {
                        $('#searchBoxFastTips').css("display", "none")
                    }
                }, 250);
            } /* ладно я понял как оно работает и поэтому я в целом убрал время ОЖИДания */
                                                                                                             })
            if (document.querySelectorAll(".playButton.musicIcon").length > 0) {
            document.querySelectorAll(".playButton.musicIcon").forEach(obj => {
                obj.onmousedown = function() {
                    this.classList.add("pressed");
                };
                obj.onmouseup = function() {
                    this.classList.remove("pressed");
                };
            })
            }
            /* создание tippy для кнопочки в хедере */
           const friendsd = await window.OVKAPI.call("friends.get", {"user_id": window.openvk.current_id, "fields": "first_name,last_name,photo_50", "count": 100})
           const friendsmap = friendsd.items
           .slice(0, friendsd.count)
           .map(item => ({
               id: item.id,
               photo_50: item.photo_50,
               first_name: item.first_name,
               last_name: item.last_name
           }));
           let friendshtml = ''
           friendsmap.forEach((user, index) => {
               friendshtml += `
                <a onclick="tippy.hideAll();" href="/audios${user.id}">
                    <div class="elem">
                        <img src="${user.photo_50}">
                        <div class="additionalInfo">
                            <span class="name noOverflow">${escapeHtml(user.first_name)} ${escapeHtml(user.last_name)}</span>
                        </div>
                    </div>
                </a>
              `;
           });
            const mushtml = `
<div style="" class="rightlist">
    <div class="verticalGrayTabs">
        <div class="with_padding">
            <a onclick="tippy.hideAll();" href="/audios${window.openvk.current_id}">${tr('my_music')}</a>
            <a onclick="tippy.hideAll();" href="/player/upload">${tr('upload_audio')}</a>
            <a onclick="tippy.hideAll();" href="/search?section=audios" id="ki">${tr('audio_new')}</a>
            <a onclick="tippy.hideAll();" href="/search?section=audios&order=listens" id="ki">${tr('audio_popular')}</a>
            <hr>
            <a onclick="tippy.hideAll();" href="/playlists${window.openvk.current_id}" id="ki">${tr('my_playlists')}</a>
            <a onclick="tippy.hideAll();" href="/audios/newPlaylist">${tr('new_playlist')}</a>
        </div>
        <div class="friendsAudiosList">
        ${friendshtml}
        </div>
    </div>
</div>
<div class="bigPlayer ctx_place">
    <div class="bigPlayerWrapper">
        <div class="playButtons">
            <div onmousedown="this.classList.add('pressed')" onmouseup="this.classList.remove('pressed')" class="playButton musicIcon" data-tip="simple" data-title=`+tr('play_tip')+`></div>
            <div class="arrowsButtons">
                <div class="nextButton musicIcon" data-tip="simple" data-title="?"></div>
                <div class="backButton musicIcon" data-tip="simple" data-title="?"></div>
            </div>
        </div>

        <div class="trackPanel">
            <div class="trackInfo">
                <div class="trackName">
                    <span class="trackPerformers"><a href="/">?</a></span> —
                    <span>?</span>
                </div>

                <div class="timer">
                    <span class="time">00:00</span>
                    <span>/</span>
                    <span class="elapsedTime">-00:00</span>
                </div>
            </div>

            <div class="track">
                <div class="selectableTrack">
                    <div id="bigPlayerLengthSliderWrapper">&nbsp;
                        <div class="slider"></div>
                    </div>
                    <div class="selectableTrackLoadProgress">
                        <div class="load_bar"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="volumePanel">
            <div class="volumePanelTrack">
                <div class="selectableTrack">
                    <div id="bigPlayerVolumeSliderWrapper">&nbsp;
                        <div class="slider" style="padding-left:122%"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="additionalButtons">
            <div class="repeatButton musicIcon" data-tip="simple" data-title=`+tr('repeat_tip')+`></div>
            <div class="shuffleButton musicIcon" data-tip="simple" data-title=`+tr('shuffle_tip')+`></div>
            <div class="deviceButton musicIcon" data-tip="simple" data-title=`+tr('mute_tip')+`></div>
        </div>
    </div>
</div>
<div class="vkifytracksplaceholder"></div>
    <div class="musfooter"><span class="playingNow"></span>
    <input onclick="tippy.hideAll();" value="${tr('close')}" class="button" type="submit">
</div>
`
       tippy(document.querySelector('#headerMusicLinkDiv'), {
       content: mushtml,
       allowHTML: true,
       trigger: 'click',
       interactive: true,
       placement: 'bottom',
       theme: 'musicpopup',
       width: 627,
       arrow: true,
       getReferenceClientRect: () => document.querySelector('#headerMusicBtn').getBoundingClientRect(),
       maxWidth: 627,
       offset: [-185, 17],
       appendTo: document.body,
       onHidden(instance) {
           window.musHtml = undefined;
       },
       async onMount(instance) {
        window.musHtml = instance.popper;
           const placeholder = instance.popper.querySelector('.vkifytracksplaceholder') || instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
           let playingNowLnk
           if (placeholder) {
               const parsedAudio = parseAudio();
               const trackList = `${parsedAudio.scrollContainer}`;
               placeholder.outerHTML = trackList;
               playingNowLnk = parsedAudio.nowPlayingUrl.replace(/^\//, '');
               if (instance.popper.querySelector('.loadMore')) {
                   instance.popper.querySelector('.musfooter .playingNow').innerHTML = `<img src="data:image/gif;base64,R0lGODlhIAAIAKECAEVojoSctMHN2QAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgADACwAAAAAIAAIAAACFZyPqcvtD6KMr445LcRUN9554kiSBQAh+QQFCgADACwCAAIAEgAEAAACD4xvM8DNiJRz8Mj5ari4AAAh+QQFCgADACwCAAIAHAAEAAACGJRvM8HNCqKMCCnn4JT1XPwMG9cJH6iNBQAh+QQFCgADACwMAAIAEgAEAAACD5RvM8HNiJRz8Mj5qri4AAAh+QQFCgADACwWAAIACAAEAAACBZSPqYsFACH5BAUUAAMALAAAAAAgAAgAAAIOnI+py+0Po5y02ouzPgUAOw==">`;
                   instance.popper.querySelector('.loadMore').onclick = async function() {await loadMoreAudio();};
               }
           }
           u(`.audiosContainer .audioEmbed .audioEntry, .audios_padding .audioEmbed`).removeClass('nowPlaying');
           u(`.audiosContainer .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry, .audios_padding .audioEmbed[data-realid='${window.player.current_track_id}'] .audioEntry`).addClass('nowPlaying')
           window.player.__updateFace();
           window.player.audioPlayer.onvolumechange();
           const acont = instance.popper.querySelector('.audiosContainer.audiosSideContainer.audiosPaddingContainer');
           const aplaying = acont?.querySelector('.audioEntry.nowPlaying');
           if (acont && aplaying) {
               const aplayingRect = aplaying.getBoundingClientRect();
               const acontRect = acont.getBoundingClientRect();
               acont.scrollTo({
                   top: aplayingRect.top - acontRect.top + acont.scrollTop - (acont.clientHeight / 2) + (aplayingRect.height / 2),
                   behavior: 'smooth'
               });
           }
           if (/^(playlist\d+_\d+|audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
               if (/^(audios-?\d+)(\?.*)?$/.test(playingNowLnk)) {
                   try {
                       let plName = (await window.OVKAPI.call("users.get", {"user_ids": Number(playingNowLnk.match(/[^\d]*(\d+)/)[1]), "fields": "first_name"}))[0].first_name ;
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${localization.vkifycurrentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('audios')} <b>${escapeHtml(plName)}</b></a>`
                   } catch(error)
                   {
                       console.error('failed to load playing now', error)
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
                   }
               } if (/^(playlist\d+_\d+)(\?.*)?$/.test(playingNowLnk)) {
                   try {
                       let plName = (await window.OVKAPI.call("audio.getAlbums", {"owner_id": Number(playingNowLnk.match(/(\d+)_(\d+)/)[1])})).items.find(item => item.id === Number(playingNowLnk.match(/(\d+)_(\d+)/)[2])).title;
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = `${localization.vkifycurrentlyplaying}<a onclick="tippy.hideAll();" href=${playingNowLnk}>${tr('playlist')} <b>${escapeHtml(plName)}</b></a>`
                   } catch(error)
                   {
                       console.error('failed to load playing now', error)
                       instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
                   }
               }
           } else {
               instance.popper.querySelector('.musfooter .playingNow').innerHTML = ``
           }
       }});
       if (ajplayerstat === 'true') {
           bindajtip(mushtml);
       }
        };
        /* опенвк не существует, очень сырая функция, не советую */
        if (realvkify == 'true') {
            function replovk(node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue.replace(/OpenVK/gi, 'ВКонтакте');
                    node.nodeValue = node.nodeValue.replace(/опенвк/gi, 'ВКонтакте');
                    node.nodeValue = node.nodeValue.replace(/опен вк/gi, 'ВКонтакте');
                    node.nodeValue = node.nodeValue.replace(/open vk/gi, 'ВКонтакте');
                } else {
                    node.childNodes.forEach(replovk);
                }
            }
            replovk(document.body);
        } /* работает только без AJAX вроде наверное, лучше её выпилить и никогда не вспоминать */
        //* замена футера *//
        const vkfooter = `
            <div class="navigation_footer">
                <a href="/about" class="link">${localization.footerabout}</a>
                <a href="/support?act=new" class="link">${localization.footersupport}</a>
                <a href="/blog" class="link">${localization.footerblog}</a>
                <a href="/terms" target="_blank" class="link">${localization.footerterms}</a>
                `+vkifysett+`
            </div>
            <p>
                    <a href="/" class="vkify-footer-lang">${localization.vknaming}</a> © `+copydate+`
                    <a href="/language?lg=ru&hash=${encodeURIComponent(csrfToken)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}" rel="nofollow" title="Русский" class="vkify-footer-lang">
                        Русский
                    </a>
                    <a href="/language?lg=en&hash=${encodeURIComponent(csrfToken)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}" rel="nofollow" title="English" class="vkify-footer-lang">
						English
                    </a>
                    <a href="/language?lg=uk&hash=${encodeURIComponent(csrfToken)}&jReturnTo=${encodeURI(window.location.pathname + window.location.search)}" rel="nofollow" title="Українcька" class="vkify-footer-lang">
                        Українcька
                    </a>
                    <a href="/language" class="vkify-footer-lang">all languages »</a>
            </p>
            <br>`;
        const footer = document.querySelectorAll('.page_footer');
        footer[0].innerHTML = vkfooter;
            async function updateOnline() {
                if (enable_vk2012 == 'true'){
                    if (onlinea == 'true') {
                        if (onlinefr == 'true') {
                            const friendson = (await window.OVKAPI.call("friends.get", {"user_id": window.openvk.current_id, "count": 99999})).items.filter(user => user.online === 1).length
                            if (Number(friendson) > 99) {
                                document.querySelector('.friends_online').textContent = "99+"
                            } else {
                                document.querySelector('.friends_online').textContent = friendson
                            }
                        } else {
                            const friendson = (await window.OVKAPI.call("ovk.aboutInstance", {"fields": "statistics"})).statistics.online_users_count
                            if (Number(friendson) > 99) {
                                document.querySelector('.friends_online').textContent = "99+"
                            } else {
                                document.querySelector('.friends_online').textContent = friendson
                            }
                        }
                    }
                }
            }
           updateOnline();
        // я чё знаю чтоле что это, это нейронка сделала конвертер
        /*function unicodeToSurrogatePair(unicode) {
            const codePoint = parseInt(unicode, 16);

            if (codePoint < 0x10000) {
                return unicode
            }

            const offset = codePoint - 0x10000;
            const highSurrogate = ((offset >> 10) & 0x3FF) + 0xD800;
            const lowSurrogate = (offset & 0x3FF) + 0xDC00;

            return [
                highSurrogate.toString(16).toUpperCase(),
                lowSurrogate.toString(16).toUpperCase(),
            ].join("");
        }*/
        function uni2uhex(unicodeCode) {
            const emoji = String.fromCodePoint(parseInt(unicodeCode, 16));

            const utf8Bytes = new TextEncoder().encode(emoji);
            const utf8Hex = Array.from(utf8Bytes)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');

            return utf8Hex;
        }
        function vkifyEmoji() {
            if (enablevkemoji == 'true') {
                const images = document.querySelectorAll('img');

                images.forEach(img => {
                    if (img.src.includes('https://abs.twimg.com/emoji/v2/72x72/')) {
                        const fileName = img.src.split('/').pop().replace('.png', '');
                        img.src = `${vkemojiserver}/${uni2uhex(fileName)}.png`;
                    }
                });
            }
        }
        vkifyEmoji();

        let mo = new MutationObserver(function(mutations) {
            if (document.querySelectorAll(".playButton.musicIcon").length > 0) {
            document.querySelectorAll(".playButton.musicIcon").forEach(obj => {
                obj.onmousedown = function() {
                    this.classList.add("pressed");
                };
                obj.onmouseup = function() {
                    this.classList.remove("pressed");
                };
            })
            }
            updateOnline();
            addtips();
            fiximg();
            fullattachmenu();
            moderninfoblock();
            minifyajplayer();
            unbigsearch();
            unlockProcessing();
            if(u('.page_header').hasClass('search_expanded_at_all')) {
                u('.page_header').removeClass('search_expanded_at_all').removeClass('search_expanded')
            } else {
                u('.page_header').removeClass('search_expanded')
            }
            if (enable_vk2012) {
                liketext();
            }
            const footer = document.querySelectorAll('.page_footer');
            if (footer[0].textContent.includes('|')) {
                footer[0].innerHTML = vkfooter;
                if (gifts_enabled == 'true') {
                    document.querySelector('#news').insertAdjacentHTML('beforebegin', `<div class="menu_divider"></div>`);
                    document.querySelector('#news').insertAdjacentHTML('afterend', window.lastgift);
                }
                /* замена счётчиков новых уведомлений */
                document.querySelectorAll('object[type="internal/link"]').forEach(obj => {
                    const boldElement = obj.querySelector('b');
                    if (boldElement && !isNaN(boldElement.textContent)) {
                        const number = boldElement.textContent;
                        obj.innerHTML = `+${number}`;
                    }
                });
            }
            if (realvkify == 'true') {
                function replovk(node) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.nodeValue = node.nodeValue.replace(/OpenVK/gi, 'ВКонтакте');
                        node.nodeValue = node.nodeValue.replace(/опенвк/gi, 'ВКонтакте');
                        node.nodeValue = node.nodeValue.replace(/опен вк/gi, 'ВКонтакте');
                        node.nodeValue = node.nodeValue.replace(/open vk/gi, 'ВКонтакте');
                    } else {
                        node.childNodes.forEach(replovk);
                    }
                }
                replovk(document.body);
            }
            vkifyEmoji();
            playgifs();
            document.title = document.title.replace("OpenVK", localization.vknaming);
        });

        if (footer) {
            mo.observe(footer[0], {
                childList: true,
                attributes: true,
                characterData: true,
                subtree: true,
                attributeOldValue: true,
                characterDataOldValue: true
            });
        }
        function toggleMusic() {
            if (enable_vk2012 == 'true') {
                const headerMusicBtn = document.querySelector('.headerMusicBtn');

                if (headerMusicBtn) {
                    headerMusicBtn.addEventListener('click', function() {
                        if (headerMusicBtn.classList.contains('paused')) {
                            window.player.play();
                            headerMusicBtn.classList.remove('paused');
                        } else {
                            window.player.pause();
                            headerMusicBtn.classList.add('paused');
                        }
                    });
                }

                if (window.player && window.player.audioPlayer) {
                    const headerMusicBtn = document.querySelector('.headerMusicBtn');
                    setInterval(() => {
                        const nowplaying = document.querySelectorAll('.audioEntry.nowPlaying');
                        if (window.player.is_closed == true) {
                            headerMusicBtn.classList.add('closed');
                            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.remove('nowPaused')})};
                        }
                        if (window.player.audioPlayer.paused == true) {
                            headerMusicBtn.classList.add('paused');
                            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.add('nowPaused')})};
                        }
                        else {
                            headerMusicBtn.classList.remove('paused');
                            if (nowplaying) {nowplaying.forEach(btn => {btn.classList.remove('nowPaused')})};
                        }
                    }, 50);
                }
            }
        }
        toggleMusic();
        if (window.location.pathname.endsWith('/settings') && window.location.search.includes('?vkify')) {
            const settingsparams = new URLSearchParams(window.location.search);
            const page = settingsparams.get("spage");
            const vkify_settings = `
<div id="wrapH">
   <div id="wrapHI">
      <div class="page_yellowheader">${localization.vkifysettings}</div>
   </div>
</div>
<div class="wrap2">
   <div class="wrap1">
      <div id="auth" class="page-wrap">
         <div class="page_content">
            <div class="page_content">
               <style>
                  .page {
                  width: 100%;
                  height: 100%;
                  background: white;
                  box-sizing: border-box;
                  }
                  .page.hidden {
                  display: none;
                  }
                  .page.active {
                  display: unset;
                  }
               </style>
               <div class="tabs">
                  <div class="tab" id="activetabs">
                     <a onclick="window.vkifysetPage(0)" id="act_tab_a">${localization.vkifysmaint}</a>
                  </div>
                  <div class="tab">
                     <a onclick="window.vkifysetPage(1)" id="ki">${localization.vkifysmusic}</a>
                  </div>
                  <div class="tab">
                     <a onclick="window.vkifysetPage(2)" id="ki">${localization.vknaming} look&feel™</a>
                  </div>
                  <div class="tab">
                     <a onclick="window.vkifysetPage(3)" id="ki">${localization.vkifyaboutt}</a>
                  </div>
               </div>
               <div class="page active">
               <div class="container_gray">
                <style>
                    .navigation-lang {
                        display: grid;
                        grid-gap: 10px;
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .navigation-lang .link_new {
                        display: inline-block;
                        padding: 20px 10px 5px 10px;
                        text-decoration: none;
                        border-top: 1px solid #fff;
                        color: #000;
                        border-bottom: 0;
                        border-left: 0;
                        border-right: 0;
                        text-align: center;
                        font-size: 11px;
                        cursor: pointer;
                        background: none;
                        margin-bottom: 1px;
                    }

                    .navigation-lang .link_new:hover {
                        background-color: #E4E4E4;
                        border-top: 1px solid #CCCCCC;
                    }
                </style>
                  <h4>${localization.vkifysmain}</h4>
                  <br>
				  <input type="checkbox" id="vkify_settings" checked="">
				  <label class="nobold" for="vkify_settings">${localization.vkifyfootersett}</label>
                  <br><br>
                  <input type="checkbox" id="gifsautoplay" checked="">
                  <label class="nobold" for="gifsautoplay">${localization.vkifygifautoplay}</label>
                  <br><br>
				  <input type="checkbox" checked="" id="enablefartscroll">
				  <label class="nobold" for="enablefartscroll">${localization.vkifyfartscroll}</label>
                  <br><br>
                  <h4>${localization.vkifylang}</h4>
                    <div class="navigation-lang">
                            <a class="link_new" onclick="vkifyloadLocalization('ru-RU');">
                                <center><img src="/assets/packages/static/openvk/img/flags/ru.gif" alt="Русский"></center>
                                <br>Русский
                            </a>
                            <a class="link_new" onclick="vkifyloadLocalization('uk-UA');">
                                <center><img src="/assets/packages/static/openvk/img/flags/ua.gif" alt="Українcька"></center>
                                <br>Українcька
                            </a>
                            <a class="link_new" onclick="vkifyloadLocalization('en-US');">
                                <center><img src="/assets/packages/static/openvk/img/flags/us.gif" alt="English"></center>
                                <br>English
                            </a>
                    </div>
                  <br><br>
                  <input type="text" id="localization" value="" placeholder="{...">
                  <label class="nobold">${localization.vkifylocalization}</label>
                  <input type="checkbox" hidden="" id="realvkify">
                  <label class="nobold" style="display: none;" for="realvkify">${localization.vkifyrealvkify}</label>
                  <span style="display: none;">${localization.vkifyrealvkifydesc}</span>
               </div></div>
               <div class="page hidden">
               <div class="container_gray">
                  <input type="checkbox" checked="" id="flatplayerbtns">
                  <label for="flatplayerbtns" class="nobold">${localization.vkifyflatplayerbtns}</label>
                  <br><br>
			      <input type="checkbox" checked="" id="ajplayere">
				  <label for="ajplayere" class="nobold">${localization.vkifyajplayere}</label>
                  <br><br>
			      <input type="checkbox" checked="" id="ajplayerm">
				  <label for="ajplayerm" class="nobold">${localization.vkifyajplayerm}</label>
                  <br><br>
			      <input type="checkbox" checked="" id="ajplayerstat">
				  <label for="ajplayerstat" class="nobold">${localization.vkifyajplayerstat}</label>
                  <br><br>
                  <input type="checkbox" checked="" id="enable_scrobble">
                  <label for="enable_scrobble" class="nobold">${localization.vkifyscrobble}</label>
                  <a id="scrobble_account" onclick="authenticateLF();" style="margin-left: 25px;">${localization.vkifyaddlastfm} (${lastfm_token ?? "" !== "" ? localization.vkifylastfmtokentrue : localization.vkifylastfmtokenfalse})</a>
                  <a id="lflogout" style="margin-left: 25px;${lastfm_token ?? "" !== "" ? "" : "display:none;"}">${localization.vkifylastfmlogout}</a>
                  <br><br>
                  <label id="iglabel" for="ignored_names" class="nobold">${localization.vkifyignames}</label><br><br>
                  <input type="text" id="ignored_names"></input><br><br>
                  <label id="iglabel" for="ignored_artists" class="nobold">${localization.vkifyigartists}</label><br><br>
                  <input type="text" id="ignored_artists"></input><br><br>
                  <label id="iglabel" for="ignored_tracks" class="nobold">${localization.vkifyigtracks}</label><br><br>
                  <input type="text" id="ignored_tracks"></input>
                  <br><br>
                  <a id="currentlyplaying" href="/audio${openvk.current_id}_${player.current_track_id}">${localization.vkifycurrentlyplaying}${player.currentTrack?.performer ?? tr('track_unknown')} - ${player.currentTrack?.name ?? tr('track_noname')},  ID: ${player.current_track_id}</a>
               </div></div>
               <div class="page hidden">
              <div class="container_gray">
                  <input type="checkbox" checked="" id="vk2012">
                  <label for="vk2012" class="nobold">${localization.vkifyvk2012}</label>
                  <br>
                <div style="background: white;border: #DEDEDE solid 1px;"><br>
                  <input name="vk2012head" type="radio" checked="" style="margin-left: 25px;" id="vk2012head2" value="1">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="2">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="3">
                  <img alt="" src="data:image/png;base64,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" />
                <br>
                  <input name="vk2012head" type="radio" id="vk2012head2" value="4" style="margin-left: 25px;">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="5">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="6">
                  <img alt="" src="data:image/png;base64,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" />
                  <br>
                  <input name="vk2012head" type="radio" id="vk2012head2" value="7" style="margin-left: 25px;">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="8">
                  <img alt="" src="data:image/png;base64,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" />
                  <input name="vk2012head" type="radio" id="vk2012head2" value="9">
                  <img alt="" src="data:image/png;base64,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" />
                  <br>
                  <input name="vk2012head" type="radio" id="vk2012head2" value="custom" style="margin-left: 25px;">
                  <img alt="" src="data:image/png;base64,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" />
                  <input type="text" id="customheader" value="" style="height: unset !important;width: 60px !important;margin-left: -95px;transform: translateY(-16px);" placeholder="https://...">
                  <label class="nobold" style="margin-left: 25px;">${localization.vkifysupportedlinks}</label>
                  <br><br>
                </div><br>
                  <input type="checkbox" checked="" id="enablevkemoji">
                  <label class="nobold" for="enablevkemoji">${localization.vkifyenablevkemoji}</label>
                  <br>

                  <input type="checkbox" checked="" style="margin-left: 25px;" id="proxyvkemoji">
                  <label class="nobold" for="proxyvkemoji">${localization.vkifyproxyvkemoji}</label>
                  <br><br>
                  <input type="checkbox" id="adm_ava_repl" checked="">
                  <label class="nobold" for="adm_ava_repl">${localization.vkifyadmavarepl}</label>
                  <br>
                  <input name="adm_ava" type="radio" id="adm_ava" value="1" style="margin-left: 25px;">
                  <img style="width: 75px;" alt="" src="data:image/png;base64,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" />
                  <input name="adm_ava" type="radio" id="adm_ava" value="2">
                  <img style="width: 75px;" alt="" src="data:image/png;base64,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" />
                  <br><br>
                  <input type="checkbox" id="team_ava_repl" checked="">
                  <label class="nobold" for="team_ava_repl">${localization.vkifyteamavarepl}</label>
                  <br>
                  <input name="team_ava" type="radio" id="team_ava" value="1" style="margin-left: 25px;">
                  <img style="width: 50px;" alt="" src="data:image/jpeg;base64,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"/>
                  <input name="team_ava" type="radio" id="team_ava" value="2">
                  <img style="width: 50px;" alt="" src="data:image/jpeg;base64,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"/>
                  <br><br>
                  <input type="checkbox" checked="" id="faviconrepl">
                  <label for="faviconrepl" class="nobold">${localization.vkifyfaviconrepl}</label>
                  <br>
                  <input name="faviconreplt" type="radio" checked="" style="margin-left: 25px;" id="faviconreplt" value="1">
                  <img alt="" src="data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACskXaEXDOHXzaIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeIYDeEXTKefV6AVyx5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB5TiB4TiB8VCeIXzh5TiB5TiB5TiB5TiB5TiB6TyB5TyF5TiF5TiB5TiB5TiB5TiB5TiB5TiCCWzCIYTh6UCF7UCF7UCJ6UCKbfFmcfFmbfFmcfFmcfFmMZj16UCJ7UCJ7UCF6UCGDWy+KYjl+UyV+VCV/VCV+UyX////////////////////////HtKB/VCV+VCV+VCWGXTGMZTuCVymBVymCVymCVyn////////g1crBq5Tw6+X///////+hgV6CVyiCVymIXzSPZz6GXC2GWiyFWiyFWi3////////DrZaGWyykg2L////////DrZaFWy2GWi2MYzeRaUCKYDGJXjCKXjCJXjD////////49fLx6+b49fL///////+ZckqJXjCJXjCPZjqUbEOPZDaOYzWOYzWOYzX///////////////////////+5noGPYzWOYzWPYzWUaT+Xb0aVaTyTZzqTaDqTaDr////////Xx7a8oYX59vP////JtJ2TaDqUZzqUaDuXbkKZcUmYbD+Xaz2Xaz2Yaz7////////MtZ+edEny7ef////l2s+Yaz6Xaz2Xaz2ackabdEqccEKabkCabkCbbUD////////////////////////g0sSbbkGabkCbbkKddEmedk6hckaecUSeckSeckTn3NHn3NHn3NHn3NHn3NHbyrmke1GeckSeckSfckWheE6gdk6hdUifc0Wgc0agc0agc0agc0afc0agc0agc0afc0agc0agc0afc0afdEakfFCddEqjeEmjeUmjeEmkeEmkeUqjeEqkeUujeUqjeUqjeUqjeUqjeUqjeUqkekucc0S8o4ufd06jfFKjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOjfVOgd020mHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
                  <input name="faviconreplt" type="radio" id="faviconreplt" value="2">
                  <img alt="" src="data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrglyYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzurglyYZzurglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyrglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22fckmfckmfckmfckmidk2qgVyzj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////////////y7OfMtJ6uh2Ozj22zj22rglyYZzuYZzurglyzj22zj22zj23////////Ww7Hcy7v59/T////Bo4ezj22zj22rglyYZzuYZzurglyzj22zj22zj23///////+qgVyqgVzNtZ/////UwK2zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////PuKPNtqD59vP59/TCpYqzj22zj22rglyYZzuYZzurglyzj22zj22zj23////////r4dj18Ov59vPBpIizj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23///////+qgVyshWD////y7Oezj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////MtJ7f0ML////59/Szj22zj22zj22rglyYZzuYZzurglyzj22zj22zj23////////////////18OzRvKezj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzurglyzj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22zj22rglyYZzuYZzu8nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH68nH6YZzurglyYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzuYZzurglwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
                  <input name="faviconreplt" type="radio" id="faviconreplt" value="3">
                  <img alt="" src="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAABMLAAATCwAAAAAAAAAAAACrglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzEq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP/////////////////8+vn/8uzm/9XBrv+sg17/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz////////////SvKj/2ce1//v59///////0ryn/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/6uCXP/dzb7//////+TWyv+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////9jFs//byrr/+vj2/////v/KsZn/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz////////////07un/+/n3///////RuqX/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc////////////q4Jc/7iWdv//////+/n3/6+HY/+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP///////////9K8qP/k1sr///////7+/v+yjGn/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/////////////////+/n3//Tv6v/OtqD/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDq4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglz/q4Jc/6uCXP+rglzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" />
                  <input name="faviconreplt" type="radio" id="faviconreplt" value="4">
                  <img alt="" src="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxzUCCgd1N5pn5a/6d+W/+fdlKkAAAAAJtyTw6fdlJzpX1Z56Z+Wv+cc1CqAAAAAAAAAAAAAAAAAAAAAJ10UTalfFjRrIRf/6+HYv+vh2L/qYFc/6F4VDiielaYqoFd/66GYf+shF//nnVS/wAAAAAAAAAAAAAAAJ10UUSnflrtroZh/7CIY/+wiGP/sIhj/66GYf+shF/wrYVg/6+HYv+thWD/pHtX/5VsSpEAAAAAAAAAAJxzUDGnflrzroZh/7CIY/+wiGP/sIhj/7CIY/+wiGP/sIhj/7CIY/+wiGP/qIBb/5lwTZuTaUcMAAAAAJpxTiGkfFjUrYVg/66GYf+shF//r4di/7CIY/+wiGP/r4di/6yEX/+vh2L/r4di/6Z9WuMAAAAAAAAAAAAAAACfdlKFq4Ne/66GYf+of1v/pXtY2KuDXv+wiGP/sIhj/6uDXv+lfVnYqYFd/66GYf+qgV3snXRQPgAAAACacU4vp35a7a+HYv+rg17/nnZTzZpyTyqnf1r/sIhj/7CIY/+nf1r/m3JPKqF3VOuthGD/roZh/6V9WOOacU4vnXRRlKyDX/+vh2L/p35a/5huTFsAAAAAp39a/7CIY/+vh2L/pHxX/wAAAACWbUt4p39a/6+HYv+sg1//nXRRlJ10UfmpgFz/qYBc/511Uv+WbUoGmXBNTKd9Wv+rg17/qoFd/552UvgAAAAAlGtICJ51Uv+pgFz/qYBc/510UfmUa0ismnFO+plvTduUakhyAAAAAJVrSd2bck76nXNQ+ppxTvGUa0icAAAAAAAAAACUakhmmW9N45pxTvqUa0iiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA+CAAAPAAAADgAAAAwAAAAIADAACAAQAAAAAAAAQgAAAAIAAACDAAAP//AAD//wAA//8AAA==" />
                  <br><br>
			      <input type="checkbox" checked="" id="profilebg">
				  <label for="profilebg" class="nobold">${localization.vkifyprofilebg}</label>
                  <br><br>
                  <input type="checkbox" checked="" id="vkgraffiti">
                  <label for="vkgraffiti" class="nobold">${localization.vkifygraffiti}</label>
                  <br><br>
                  <input type="checkbox" id="gifts_enabled" checked="">
                  <label class="nobold" for="gifts_enabled">${localization.vkifyshowgift}</label>
                  <br><br>
                  <input type="checkbox" id="starlike" checked="">
                  <label class="nobold" for="starlike">${localization.vkifystar_like}</label>
                  <br><br>
                  <input type="checkbox" id="onlinea" checked="">
                  <label class="nobold" for="onlinea">${localization.vkifyonline}</label>
                  <input type="checkbox" id="onlinefr" checked="">
                  <label class="nobold" for="onlinefr">${localization.vkifyonlinefr}</label>
                  <br><br>
                  <input type="checkbox" id="newabout" checked="">
                  <label class="nobold" for="newabout">${localization.vkifynewabout}</label>
                  <br><br>
                  <input type="checkbox" id="flatbuttons" checked="">
                  <label class="nobold" for="flatbuttons">${localization.vkifyflatbtns}</label>
                  </div></div>
               <div class="page hidden">
              <div class="container_gray">
                  <h4>${localization.vkifyaboutt}</h4>
               </div>
                <div style="text-align: center;margin-bottom: 15px;"><img id="vkifylogo" alt="" style="margin-top: 15px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOumlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iIHhtbG5zOnBkZng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmeC8xLjMvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXBNTTpSZW5kaXRpb25DbGFzcz0icHJvb2Y6cGRmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NjVFNjM5MDY4NkNGMTFEQkE2RTJEODg3Q0VBQ0I0MDciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZGY2YmQ0Mi0wMzdiLTgxNGEtODk5Mi0zMjZmNWY3ODJiNTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJjZjMtNGRiZi02OTRjLTgyMmYtZmFmMDI0NzA2NDRjIiBpbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT0iV2ViIiBwZGY6UHJvZHVjZXI9IkFkb2JlIFBERiBsaWJyYXJ5IDE1LjAwIiBwZGZ4OkNyZWF0b3JWZXJzaW9uPSIyMS4wLjAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMDIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMzk0Ij4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5XZWI8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYmY1ODZkYS1kZWQ2LWM1NDYtOGU0MC00OTMwNzZmMGFkN2IiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MmFiYmIyNy1kMWUwLTViNGEtOGNiYy02ZDFkNTYwNjY2NWUiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo2NUU2MzkwNjg2Q0YxMURCQTZFMkQ4ODdDRUFDQjQwNyIgc3RSZWY6cmVuZGl0aW9uQ2xhc3M9InByb29mOnBkZiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYjE3ZjM5MS0wOTk3LWRkNDEtYTNlOS0zZWUwNDNkNzA3YmUiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6Mjk6MTIrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmM2E4ZWIzMS05YTJiLWQxNGMtOWM3Ni03MWIzMzMzZmNmYWEiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24veC1waG90b3Nob3AgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTQ2YzAxNjItNzljYS1iYzQ3LTgzZTctOWI5ZGQzOWY3NWNhIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTE1VDIwOjMzOjQ2KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMy4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3gtcGhvdG9zaG9wIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmMDFkY2E4LWI1OGQtOTI0Yy1hOGQyLTAyY2I5YjI0ZDkyMyIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNVQyMDozMzo0NiswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjMuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiZjU4NmRhLWRlZDYtYzU0Ni04ZTQwLTQ5MzA3NmYwYWQ3YiIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNlQyMzozNDo1MyswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJj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"><br>
                ${localization.vkifyabout}<br><br>
                <a href="https://github.com/koke228666/VKify">GitHub</a><br>
                <a href="https://ovk.to/vkify">OpenVK</a><br><br>koke228, 2025</div>
               </div>
               </div>
               <div class="page hidden" id="error_page">
               <div class="container_gray">
                  <h4>ану не балуйся</h4>
               </div>
               </div>
				 <div class="container_gray">
                 <input value="${tr('save')}" class="button" type="submit" id="save"></div>
            </div>
         </div>
      </div>
   </div>
</div>
    `;
        const pgbody = document.querySelector('div.page_body');
        if (pgbody) {
            pgbody.innerHTML = vkify_settings;
            const pages = pgbody.querySelectorAll('.page');
            const errorpage = pgbody.querySelector('#error_page');
            const tabs = pgbody.querySelectorAll('.tab');
            const tabsa = pgbody.querySelectorAll('.tab a');

            window.vkifysetPage = function setPage(page) {
                try {
                    pages.forEach(pg => {
                        pg.classList.remove('active');
                        pg.classList.add('hidden');
                    });
                    pages[page].classList.remove('hidden');
                    pages[page].classList.add('active');

                    tabs.forEach(tb => {
                        tb.id = ''
                    });
                    tabs[page].id = 'activetabs'

                    tabsa.forEach(tba => {
                        tba.id = 'ki'
                    });
                    tabsa[page].id = 'act_tab_a'
                } catch(error) {
                    errorpage.classList.add('active');
                }
            };
            window.vkifysetPage(Number(page));
        }
        let callCount = 0;
        setInterval(() => callCount = 0, 1500);

        function clickr() {
            if (++callCount >= 5) {
                localStorage.setItem('flatplayerbtns', "true");
                localStorage.setItem('vk2012', "true");
                localStorage.setItem('vk2012_header_type', "custom");
                localStorage.setItem('customheader', "data:image/png;base64,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");
                const catoloc = Object.fromEntries(
                    Object.keys(localization).map(key => [key, "кот"])
                );
                localStorage.setItem('localizationdata', JSON.stringify(catoloc));
                NewNotification('debug', "resetting vkify settings...", popupimg, () => {}, 5000, false);
                document.querySelector("#vkifylogo").onclick="event.preventDefault();";
                setTimeout("location.reload();", 1000);
            }
        }
        document.querySelector("#vkifylogo").addEventListener("click", clickr);
        setTip('#scrobble_account', localization.vkifyscrobbleacc_help)
        setTip('label[for="proxyvkemoji"]', localization.vkifyproxyvkemojidesc)
        setTip('label[for="enablevkemoji"]', localization.vkifyenablevkemojidesc)
        setTip('label[for="enablefartscroll"]', localization.vkifyfartscrolldesc)
        setTip('label[for="vkify_settings"]', localization.vkifyfootersettdesc, true)
        setTip('#iglabel', localization.vkifyiglabel)
        setTip('label[for="onlinefr"]', localization.vkifyonlinefrpopup)
        setTip('label[for="ajplayerm"]', '<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAvCAYAAACCAApkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMwSURBVHhe7ZxNbhQxFIQ5KivOAStgwxESFhwBkLgDYgUEBIiAxE8WbLhAwxvpoUdN2W33tLuduEr6NPar8tDqLiUZFnNrkqTOpFJK3UmllLqTSil1J1rKq1+/pw9fr6b3lz+FaIL1y3rGdFRKC7I3EaIFrJhHpdRPSLEl1jfUUSnZQSGWcPH5R9EMpVKKJlj5Hj15Mb26+PJvZmubYTFRKqVohpXw4fnzw2tcYw6lUoqmWAnvnz09wAppoFRK0ZQhSnnn3tkB5olytriPL99eTg/Onx3KaNjaZphDdVtKv2l447a4mTlS18WI2dIzW9H6euzDzKGQ78IHnb9rm73++O2/LEqlrCD+2yXXgZmSM1uxxbWw//558+n70QzVZSnjDcOb5/uIe8zH+dwe55Ho5XIOZlL71HxuPzePXomfyrHMmqCubSlrs0s9xL2SfMxiJrff2stRmjsF1GqlvH338QHm1RJvBN6U3D7nxf3c3HEfc2wdc07M4N7XCGZTc7Zf6iHuRVhuLVCrl/LUYrIb4kQf83Ne3Kfmvk9Rey6XRw9xH3O5/VIvUppbE1STUp5STHYT4gz9Uq92xqg9i17co8dgGZzF/VIvUppbE1SzUi4tJrsJcebrCMsyL/qpeQQzLBdnc1nMlPpxFufol+4j7kVyuZJ1LaimpTRYVsyDZbjJoJqX0mB5kUelDGKHSmBldFheCAelX99id1DdfdDJMcqvs9FANSsly9TA/qZqUcrcezKvxTWMDqpJKZlfiz18LECLQuTek3ktrmF0UKuXknm1xAfP1vbqxL3nWCY1xz1mczN2Fmfos8zooFYr5ZrEh8XWNX5unpo55jHcwyzO2Tp1bmRQw5Uy5TGYF99rbs7W9op4ZlRQ3ZWSPTTDvfiaWsdZap/KRpiXOsfmbI3nxDUpZWrGHixbxxnbxxnznJpzbM7WqXMjg7qRpfS1k5vFeZz5PDfzczgrWTs+GxlUl39TirFAqZRid1AqpdgdlEopdgelUordQamUYndQR6XUN/mKLSn6Jl9957nYkqLvPDdZUD8xRUusX6yQJlpKSdpTKqXUnVRKqTuplFJnmqY/ZriiecdKyJUAAAAASUVORK5CYII="/>')
        document.querySelector('#lflogout').onclick = function() {
            localStorage.setItem('LASTFM_TOKEN', '');
            document.querySelector('#lflogout').style.display = "none"
            document.querySelector('#scrobble_account').textContent = `${localization.vkifyaddlastfm} (${localization.vkifylastfmtokenfalse})`
            NewNotification('VKify', "вот и всё", popupimg, () => {}, 5000, false);
        }
        function saveSettings() {
            localStorage.setItem('enable_vkify_settings', document.getElementById('vkify_settings').checked);
            localStorage.setItem('vk2012', document.getElementById('vk2012').checked);
            localStorage.setItem('realvkify', document.getElementById('realvkify').checked);
            const selectedHeader = document.querySelector('input[name="vk2012head"]:checked').id;
            localStorage.setItem('vk2012_header_type', document.querySelector('input[name="vk2012head"]:checked').value);
            localStorage.setItem('enablefartscroll', document.getElementById('enablefartscroll').checked);
            localStorage.setItem('enablevkemoji', document.getElementById('enablevkemoji').checked);
            localStorage.setItem('proxyvkemoji', document.getElementById('proxyvkemoji').checked);
            localStorage.setItem('flatplayerbtns', document.getElementById('flatplayerbtns').checked);
            localStorage.setItem('customheader', document.getElementById('customheader').value);
            localStorage.setItem('adm_ava_repl', document.getElementById('adm_ava_repl').checked);
            localStorage.setItem('adm_ava', document.querySelector('input[name="adm_ava"]:checked').value);
            localStorage.setItem('gifsautoplay', document.getElementById('gifsautoplay').checked);
            localStorage.setItem('faviconrepl', document.getElementById('faviconrepl').checked);
            localStorage.setItem('faviconreplt', document.querySelector('input[name="faviconreplt"]:checked').value);
            localStorage.setItem('localizationdata', document.getElementById('localization').value);
            localStorage.setItem('profilebg', document.getElementById('profilebg').checked);
            localStorage.setItem('vkgraffiti', document.getElementById('vkgraffiti').checked);
            localStorage.setItem('team_ava_repl', document.getElementById('team_ava_repl').checked);
            localStorage.setItem('team_ava', document.querySelector('input[name="team_ava"]:checked').value);
            localStorage.setItem('team_ava_repl', document.getElementById('team_ava_repl').checked);
            localStorage.setItem('enable_scrobble', document.getElementById('enable_scrobble').checked);
            localStorage.setItem('gifts_enabled', document.getElementById('gifts_enabled').checked);
            localStorage.setItem('ignored_names', document.getElementById('ignored_names').value);
            localStorage.setItem('ignored_artists', document.getElementById('ignored_artists').value);
            localStorage.setItem('ignored_tracks', document.getElementById('ignored_tracks').value);
            localStorage.setItem('starlike', document.getElementById('starlike').checked);
            localStorage.setItem('onlinea', document.getElementById('onlinea').checked);
            localStorage.setItem('onlinefr', document.getElementById('onlinefr').checked);
            localStorage.setItem('newabout', document.getElementById('newabout').checked);
            localStorage.setItem('ajplayere', document.getElementById('ajplayere').checked);
            localStorage.setItem('ajplayerm', document.getElementById('ajplayerm').checked);
            localStorage.setItem('ajplayerstat', document.getElementById('ajplayerstat').checked);
            localStorage.setItem('flatbuttons', document.getElementById('flatbuttons').checked);

            NewNotification('VKify', localization.vkifysaved, popupimg, () => {}, 5000, false);
            document.querySelector('#ajloader').style = "display: unset;"
            setTimeout("location.reload();", 1000);
        }
        document.getElementById('save').addEventListener('click', saveSettings);
        document.getElementById('vkify_settings').checked = (/true/).test(localStorage.getItem('enable_vkify_settings'));
        document.getElementById('vk2012').checked = (/true/).test(localStorage.getItem('vk2012'));
        document.getElementById('realvkify').checked = (/true/).test(localStorage.getItem('realvkify'));
        document.getElementById('enablefartscroll').checked = (/true/).test(localStorage.getItem('enablefartscroll'));
        document.getElementById('enablevkemoji').checked = (/true/).test(localStorage.getItem('enablevkemoji'));
        document.getElementById('proxyvkemoji').checked = (/true/).test(localStorage.getItem('proxyvkemoji'));
        document.getElementById('flatplayerbtns').checked = (/true/).test(localStorage.getItem('flatplayerbtns'));
        document.getElementById('customheader').value = localStorage.getItem('customheader');
        document.getElementById('adm_ava_repl').checked = (/true/).test(localStorage.getItem('adm_ava_repl'));
        document.getElementById('gifsautoplay').checked = (/true/).test(localStorage.getItem('gifsautoplay'));
        document.getElementById('faviconrepl').checked = (/true/).test(localStorage.getItem('faviconrepl'));
        document.getElementById('localization').value = localStorage.getItem('localizationdata');
        document.getElementById('profilebg').checked = (/true/).test(localStorage.getItem('profilebg'));
        document.getElementById('vkgraffiti').checked = (/true/).test(localStorage.getItem('vkgraffiti'));
        document.getElementById('team_ava_repl').checked = (/true/).test(localStorage.getItem('team_ava_repl'));
        document.getElementById('enable_scrobble').checked = (/true/).test(localStorage.getItem('enable_scrobble'));
        document.getElementById('gifts_enabled').checked = (/true/).test(localStorage.getItem('gifts_enabled'));
        document.getElementById('ignored_names').value = localStorage.getItem('ignored_names');
        document.getElementById('ignored_artists').value = localStorage.getItem('ignored_artists');
        document.getElementById('ignored_tracks').value = localStorage.getItem('ignored_tracks');
        document.getElementById('starlike').checked = (/true/).test(localStorage.getItem('starlike'));
        document.getElementById('onlinea').checked = (/true/).test(localStorage.getItem('onlinea'));
        document.getElementById('onlinefr').checked = (/true/).test(localStorage.getItem('onlinefr'));
        document.getElementById('newabout').checked = (/true/).test(localStorage.getItem('newabout'));
        document.getElementById('ajplayere').checked = (/true/).test(localStorage.getItem('ajplayere'));
        document.getElementById('ajplayerm').checked = (/true/).test(localStorage.getItem('ajplayerm'));
        document.getElementById('ajplayerstat').checked = (/true/).test(localStorage.getItem('ajplayerstat'));
        document.getElementById('flatbuttons').checked = (/true/).test(localStorage.getItem('flatbuttons'));
        const headradios = document.querySelectorAll(`input[type="radio"][name="vk2012head"]`);
        headradios.forEach(radio => {
            if (radio.value === localStorage.getItem('vk2012_header_type')) {
                radio.checked = true;
            }
        });
        const admradios = document.querySelectorAll(`input[type="radio"][name="adm_ava"]`);
        admradios.forEach(radio => {
            if (radio.value === localStorage.getItem('adm_ava')) {
                radio.checked = true;
            }
        });
        const faviconreplts = document.querySelectorAll(`input[type="radio"][name="faviconreplt"]`);
        faviconreplts.forEach(radio => {
            if (radio.value === localStorage.getItem('faviconreplt')) {
                radio.checked = true;
            }
        });
        const teamradios = document.querySelectorAll(`input[type="radio"][name="team_ava"]`);
        teamradios.forEach(radio => {
            if (radio.value === localStorage.getItem('team_ava')) {
                radio.checked = true;
            }
        });
        if (firstload == 'true') {
            window.vkifysetPage(1);
            localStorage.setItem('firstload', 'false');
            const msg = new CMessageBox({
                title: 'VKify',
                body: `<div style="text-align: center;"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOumlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iIHhtbG5zOnBkZng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmeC8xLjMvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXBNTTpSZW5kaXRpb25DbGFzcz0icHJvb2Y6cGRmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NjVFNjM5MDY4NkNGMTFEQkE2RTJEODg3Q0VBQ0I0MDciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZGY2YmQ0Mi0wMzdiLTgxNGEtODk5Mi0zMjZmNWY3ODJiNTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJjZjMtNGRiZi02OTRjLTgyMmYtZmFmMDI0NzA2NDRjIiBpbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT0iV2ViIiBwZGY6UHJvZHVjZXI9IkFkb2JlIFBERiBsaWJyYXJ5IDE1LjAwIiBwZGZ4OkNyZWF0b3JWZXJzaW9uPSIyMS4wLjAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMDIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMzk0Ij4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5XZWI8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYmY1ODZkYS1kZWQ2LWM1NDYtOGU0MC00OTMwNzZmMGFkN2IiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MmFiYmIyNy1kMWUwLTViNGEtOGNiYy02ZDFkNTYwNjY2NWUiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo2NUU2MzkwNjg2Q0YxMURCQTZFMkQ4ODdDRUFDQjQwNyIgc3RSZWY6cmVuZGl0aW9uQ2xhc3M9InByb29mOnBkZiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYjE3ZjM5MS0wOTk3LWRkNDEtYTNlOS0zZWUwNDNkNzA3YmUiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6Mjk6MTIrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmM2E4ZWIzMS05YTJiLWQxNGMtOWM3Ni03MWIzMzMzZmNmYWEiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24veC1waG90b3Nob3AgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTQ2YzAxNjItNzljYS1iYzQ3LTgzZTctOWI5ZGQzOWY3NWNhIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTE1VDIwOjMzOjQ2KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMy4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3gtcGhvdG9zaG9wIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmMDFkY2E4LWI1OGQtOTI0Yy1hOGQyLTAyY2I5YjI0ZDkyMyIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNVQyMDozMzo0NiswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjMuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiZjU4NmRhLWRlZDYtYzU0Ni04ZTQwLTQ5MzA3NmYwYWQ3YiIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNlQyMzozNDo1MyswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJj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">
        <br><span>
        Привет! Скорее всего, ты видишь это сообщение из-за того, что впервые установил VKify.
        Тут есть много всяких прикольных настроек и маленьких фишечек. Приятного использования!</span>
        <br><br>
        <span>Рекомендую вступить в нашу <a href="/vkify">группу</a>, там же есть <a href="/topic4839_1">обсуждение для багрепортов</a>.
        </span></div>`,
        buttons: [tr('close')],
        callbacks: [() => {msg.close()}]
    });
    }
    }
    });
})();
} catch (error) {
    window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('style.stylus').forEach(el => el.textContent = '');
    })
    console.error(error)
    window.onload = function() {
        var vkifyerr = new CMessageBox({
        title: 'VKify',
        body: `<div style="text-align: center;"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAOumlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIiB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iIHhtbG5zOnBkZng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmeC8xLjMvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTE2VDIzOjM0OjUzKzA1OjAwIiB4bXBNTTpSZW5kaXRpb25DbGFzcz0icHJvb2Y6cGRmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NjVFNjM5MDY4NkNGMTFEQkE2RTJEODg3Q0VBQ0I0MDciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZGY2YmQ0Mi0wMzdiLTgxNGEtODk5Mi0zMjZmNWY3ODJiNTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJjZjMtNGRiZi02OTRjLTgyMmYtZmFmMDI0NzA2NDRjIiBpbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT0iV2ViIiBwZGY6UHJvZHVjZXI9IkFkb2JlIFBERiBsaWJyYXJ5IDE1LjAwIiBwZGZ4OkNyZWF0b3JWZXJzaW9uPSIyMS4wLjAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMDIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIxMzk0Ij4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5XZWI8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjYmY1ODZkYS1kZWQ2LWM1NDYtOGU0MC00OTMwNzZmMGFkN2IiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MmFiYmIyNy1kMWUwLTViNGEtOGNiYy02ZDFkNTYwNjY2NWUiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo2NUU2MzkwNjg2Q0YxMURCQTZFMkQ4ODdDRUFDQjQwNyIgc3RSZWY6cmVuZGl0aW9uQ2xhc3M9InByb29mOnBkZiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYjE3ZjM5MS0wOTk3LWRkNDEtYTNlOS0zZWUwNDNkNzA3YmUiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6Mjk6MTIrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmM2E4ZWIzMS05YTJiLWQxNGMtOWM3Ni03MWIzMzMzZmNmYWEiIHN0RXZ0OndoZW49IjIwMTktMDQtMTVUMjA6MzM6NDUrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24veC1waG90b3Nob3AgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTQ2YzAxNjItNzljYS1iYzQ3LTgzZTctOWI5ZGQzOWY3NWNhIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTE1VDIwOjMzOjQ2KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMy4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3gtcGhvdG9zaG9wIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmMDFkY2E4LWI1OGQtOTI0Yy1hOGQyLTAyY2I5YjI0ZDkyMyIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNVQyMDozMzo0NiswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjMuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiZjU4NmRhLWRlZDYtYzU0Ni04ZTQwLTQ5MzA3NmYwYWQ3YiIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNlQyMzozNDo1MyswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWRhNjJj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">
        <br><span>Ой-ой, возникла какая-то ошибка в работе VKify.<br>
        <br>
        Сообщение: ${error.message}<br>
        Подробности в консоли.<br>
        Стиль Stylus был выгружен.</span>
        <br><br>
        <span>Вы можете отправить багрепорт в <a href="/topic4839_1">обсуждении</a>, или же в <a href="https://github.com/koke228666/VKify/issues">GitHub</a>.<br><br>
        Вероятно, перезагрузка страницы решит проблему.<br>Во всяком случае, попытаться стоит.
        </span></div>`,
        buttons: ["Перезагрузить страницу", tr('close')],
        callbacks: [() => {location.reload()}, () => {vkifyerr.close()}]
    });
    };
}
