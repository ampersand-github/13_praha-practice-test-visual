import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from "@storybook/addon-storyshots-puppeteer";
//initStoryshots();

initStoryshots({ suite: 'Puppeteer storyshots', test: imageSnapshot() });
