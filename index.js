class noMoreShakes {
    constructor(mod) {
        mod.clientInterface.configureCameraShake(false, 0.0, 0.0);
    }
}

module.exports = noMoreShakes;
