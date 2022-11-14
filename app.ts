import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit()

const USER = 'southernMD';
const PASS = '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';
const REPO = 'github.com/southernMD/wwww.git';

const remote = `https://${USER}:${PASS}@${REPO}`;


try {
    git.
    add('./*').
    commit('2').
    push([remote], () => console.log('done'));
} catch (error) {
    console.log(error);
}


