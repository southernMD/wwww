import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit()

const USER = 'southernMD';
const PASS = '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';
const REPO = 'github.com/southernMD/wwww.git';

const remote = `https://${USER}:${PASS}@${REPO}`;


git.init().
    add('./*').
    commit('hhhh').
    addRemote('origin', remote).
    push('origin', 'main')
