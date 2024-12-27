<script setup lang="ts">
const inhaber = [
  {
    name: 'Kosmo 🎄',
    icon: '/team/kosmo.webp',
    jobs: [
      {
        name: 'Projektinhaber',
        icon: 'i-heroicons:currency-dollar-16-solid',
      }
    ],
    quote: 'Faul / Nicht Existent / Sugar Daddy',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
]

const leitung = [
  {
    name: "Kaesekuchen 🎄",
    icon: "/team/kuchen.webp",
    jobs: [
      {
        name: "Projektleitung",
        icon: "i-heroicons:academic-cap-16-solid"
      }
    ],
    quote: "Wenns nicht passt, wirds passend gemacht",
    links: [
      {
        name: "YouTube",
        icon: "i-bxl:youtube",
        link: "https://www.youtube.com/@kaesiee"
      },
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/id/Kaesieee/"
      },
      {
        name: "Instagram",
        icon: "i-bxl:instagram",
        link: "https://www.instagram.com/kkaesekuchen/profilecard/?igsh=MTdzMDAybWZkN2I4eQ=="
      },
    ]
  },
  {
    name: 'Hey 🎄',
    icon: '/team/hey.webp',
    jobs: [
      {
        name: 'Projektleitung',
        icon: 'i-heroicons:academic-cap-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'SkurosHD 🎄',
    icon: '/team/skuros.webp',
    jobs: [
      {
        name: 'Projektleitung',
        icon: 'i-heroicons:academic-cap-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
]

const management = [
  {
    name: "KillerQuadro 🎄",
    icon: "/team/killer.webp",
    jobs: [
      {
        name: "Managment",
        icon: "i-heroicons:megaphone-16-solid"
      }
    ],
    quote: "Sei immer du selbst, auch wenn du kein Snickers hast ",
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/profiles/76561199559902755"
      },
      {
        name: "YouTube",
        icon: "i-bxl:youtube",
        link: "https://www.youtube.com/channel/UCfnuKC3SGG3P9Ju24wqhOmA"
      },
      {
        name: "Instagram",
        icon: "i-bxl:instagram",
        link: "https://www.instagram.com/kasperle_1907/"
      },
      {
        name: "Twitch",
        icon: "i-bxl:twitch",
        link: "https://www.twitch.tv/killerquadro"
      },
      {
        name: "Spotify",
        icon: "i-bxl:spotify",
        link: "https://open.spotify.com/user/31hmdmn4tk7bftxevyojrq6nuz3e"
      }
    ]
  },
  {
    name: 'Alfonda 🎄',
    icon: '/team/alfonda.webp',
    jobs: [
      {
        name: 'Event Manager',
        icon: 'i-heroicons:trophy-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
]

const teamleitung = [
  {
    name: 'Cyber/Tjulfar 🎄',
    icon: '/team/cyber.webp',
    jobs: [
      {
        name: 'Teamleitung',
        icon: 'i-heroicons:identification-16-solid',
      },
      {
        name: 'Teamverwaltung',
        icon: 'i-heroicons:share-16-solid',
      },
      {
        name: 'Ausbilder',
        icon: 'i-heroicons:megaphone-16-solid',
      }
    ],
    quote: 'Hast du probleme mit teamlern komm zu mir',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'Leon Massase 🎄',
    icon: '/team/leon.webp',
    jobs: [
      {
        name: 'Teamleitung',
        icon: 'i-heroicons:identification-16-solid',
      },
      {
        name: 'Teamverwaltung',
        icon: 'i-heroicons:share-16-solid',
      },
      {
        name: 'Ausbilder',
        icon: 'i-heroicons:megaphone-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'Spino 🎄',
    icon: '/team/spino.webp',
    jobs: [
      {
        name: 'Stv. Teamleitung',
        icon: 'i-heroicons:identification-16-solid',
      },
      {
        name: 'Teamverwaltung',
        icon: 'i-heroicons:share-16-solid',
      },
      {
        name: 'Ausbilder',
        icon: 'i-heroicons:megaphone-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
]

const development = [
  {
    name: 'Vxrpenter 🎄',
    icon: '/team/vxrpenter.png',
    jobs: [
      {
        name: 'Developer',
        icon: 'i-heroicons:code-bracket-square-16-solid',
      },
      {
        name: "Bug Fixer",
        icon: "i-heroicons:bug-ant-16-solid"
      }
    ],
    quote: 'Das Leben ist zu kurz um sehr viel zu schlafen, also verschlafe ich die meiste Zeit',
    links: [
      {
        name: "GitHub",
        icon: "i-bxl:github",
        link: "https://github.com/Vxrpenter"
      },
      {
        name: "YouTube",
        icon: "i-bxl:youtube",
        link: "https://www.youtube.com/@vxrpenter"
      },
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/id/survivedark/"
      },
      {
        name: "Twitch",
        icon: "i-bxl:twitch",
        link: "https://www.twitch.tv/vxrpenter"
      },
      {
        name: "Reddit",
        icon: "i-bxl:reddit",
        link: "https://www.reddit.com/user/Vxrpenter/"
      },
      {
        name: "Spotify",
        icon: "i-bxl:spotify",
        link: "https://open.spotify.com/user/31cwn74s2eebjf65pt4jsllwhdtu"
      },
    ],
  }
]

const moderation = [
  {
    name: 'Pixel :D 🎄',
    icon: '/team/pixel.png',
    jobs: [
      {
        name: 'Support Leitung',
        icon: 'i-heroicons:user-group-16-solid',
      }
    ],
    quote: 'Kein Plan was ich mache',
    links: [
      {
        name: "YouTube",
        icon: "i-bxl:youtube",
        link: "https://www.youtube.com/@pixeljonas"
      },
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/user/crrq-rfjj/FQTPGVDJ/"
      },
    ],
  },
  {
    name: 'Wau Wau 🎄',
    icon: '/team/wauwau.webp',
    jobs: [
      {
        name: 'Sr. Moderator',
        icon: 'i-heroicons:user-group-16-solid',
      }
    ],
    quote: 'Lieber den Braten gerochen als den Rochen gebraten',
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/id/7657152395823452/"
      },
      {
        name: "Instagram",
        icon: "i-bxl:instagram",
        link: "https://www.instagram.com/yaaboy_t/profilecard/?igsh=enRmajBrc3prcXFr"
      },
    ],
  },
  {
    name: 'Toilet destroyer 🎄',
    icon: '/team/toilet.webp',
    jobs: [
      {
        name: 'Moderator',
        icon: 'i-heroicons:user-group-16-solid',
      }
    ],
    quote: 'As a kid i wanted to be a racer now look at me im a racist',
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/profiles/76561198798681150/"
      },
    ],
  },
  {
    name: 'Fake Simon3 🎄',
    icon: '/team/fakesimon.webp',
    jobs: [
      {
        name: 'Moderator',
        icon: 'i-heroicons:user-group-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'Darklord 🎄',
    icon: '/team/darklord.png',
    jobs: [
      {
        name: 'Jr. Moderator',
        icon: 'i-heroicons:user-group-16-solid',
      }
    ],
    quote: 'Ich hasse Menschen',
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://s.team/p/jjpk-nqhn/RQGTBVGD"
      },
    ],
  }
]

const support = [
  {
    name: 'Astromarwin 🎄',
    icon: '/team/astromarwin.webp',
    jobs: [
      {
        name: 'Community Support',
        icon: 'i-heroicons:light-bulb-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'Angel / Devil 🎄',
    icon: '/team/angel.png',
    jobs: [
      {
        name: 'Sr. Supporter',
        icon: 'i-heroicons:phone-16-solid',
      }
    ],
    quote: 'Ich hasse Menschen',
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/user/hwtp-bmqw/ggjkphhn/"
      },
    ],
  },
  {
    name: 'Professor 🎄',
    icon: '/team/professor.webp',
    jobs: [
      {
        name: 'Sr. Supporter',
        icon: 'i-heroicons:phone-16-solid',
      }
    ],
    quote: 'Zeit ist Geld und Geld habe ich net',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'Ironbeagle 🎄',
    icon: '/team/iron.png',
    jobs: [
      {
        name: 'Discord Support',
        icon: 'i-bxl:discord',
      }
    ],
    quote: 'Get Geironed',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'TarjaPapaya :D 🎄',
    icon: '/team/tarja.webp',
    jobs: [
      {
        name: 'Supporter',
        icon: 'i-heroicons:phone-16-solid',
      }
    ],
    quote: 'KEINS!',
    links: [
      {
        name: "Keine",
        icon: "i-heroicons:x-mark-16-solid",
        link: "/"
      }
    ]
  },
  {
    name: 'itsmechris:) 🎄',
    icon: '/team/chris.webp',
    jobs: [
      {
        name: 'Supporter',
        icon: 'i-heroicons:phone-16-solid',
      }
    ],
    quote: 'Gibt es ein Loch, gibt es ein Ziel',
    links: [
      {
        name: "Steam",
        icon: "i-bxl:steam",
        link: "https://steamcommunity.com/profiles/76561199440882894"
      }
    ]
  }
]
</script>

<template>
  <UContainer>
    <div>
      <div class="py-4">
        <p class="titleText"> Inhaber</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in inhaber" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Leitung</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in leitung" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Management</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in management" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Teamleitung</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in teamleitung" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Development</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6"  v-for="(item, index) in development" :key="index">
          <UCard data-aos="fade-up" class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Moderation</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in moderation" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>

    <div class="py-20">
      <UDivider/>
    </div>

    <div>
      <div class="py-4">
        <p class="titleText"> Support</p>
      </div>
      <section class="grid grid-cols-2 gap-2">
        <div class="py-6" data-aos="fade-up" v-for="(item, index) in support" :key="index">
          <UCard class="card rounded-xl">
            <div class="icon-and-text">
              <NuxtImg :src="item.icon" width="80" height="80"/>
              <h1 class="name m-2">{{ item.name }}</h1>
            </div>

            <div class="py-2">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Position im Team</h2>
            <div class="py-1 grid grid-cols-2">
              <div v-for="(job, index) in item.jobs" :key="index">
                <UButton :label="job.name" :leading-icon="job.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <div class="py-4">
              <div class="py-1">
                <h2 class="subtitle">Persönliches Motto</h2>
                <h3>{{ item.quote }}</h3>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>

            <h2 class="subtitle py-1">Links</h2>
            <div class="text-left py-1 grid grid-cols-3 gap-2">
              <div v-for="(link, index) in item.links" :key="index">
                <UButton :to="link.link" :label="link.name" :leading-icon="link.icon" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
              </div>
            </div>

            <div class="py-1">
              <UDivider/>
            </div>
          </UCard>
        </div>
      </section>
    </div>
  </UContainer>
</template>

<style scoped>
.name {
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left;
  color: white;
}

.subtitle {
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.titleText {
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: white;
}

.icon-and-text {
  display: flex;
  align-items: center;
}

img {
  border-radius: 50%;
}

.card {
  background-color: transparent;
  width: 500px;
  padding: 20px 40px;
  border: 1px solid gray;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>