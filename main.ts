//% weight=100 color=#DC22E1 block="MINTspark DOBOT Agent" blockId="MINTspark DOBOT Agent" icon="\uf0e7"
//% groups='["Setup", "Move"]'
namespace mintspark_dobot_agent {
    //% weight=100
    //% group="Setup"
    //% block="Set Comm Channel %channel"
    //% color=#1e90ff
    export function setCommChannel(channel: number): void {
        radio.setGroup(channel);
    }

    //% weight=90
    //% group="Move"
    //% block="Move to start"
    //% color=#1e90ff
    export function moveToStart(): void {
        radio.sendValue("START", 0);
    }

    //% weight=80
    //% group="Move"
    //% block="Stop"
    //% color=#1e90ff
    export function stop(): void {
        radio.sendValue("STOP", 0);
    }

    //% weight=70
    //% group="Move"
    //% block="Move to position %position jump %jump"
    //% color=#1e90ff
    export function moveToPosition(position: number, jump: boolean): void {
        if (jump)
        {
            radio.sendValue("MOVEJU", position);
        }
        else
        {
            radio.sendValue("MOVELI", position);
        }
    }

    //% weight=60
    //% group="Effector"
    //% block="Grip / Suck"
    //% color=#1e90ff
    export function grip(): void {
        radio.sendValue("GRIP", 1);
    }

    //% weight=60
    //% group="Effector"
    //% block="Open / Blow"
    //% color=#1e90ff
    export function open(): void {
        radio.sendValue("GRIP", 0);
    }
    //% weight=50
    //% group="Effector"
    //% block="Pump Off"
    //% color=#1e90ff
    export function pumpOff(): void {
        radio.sendValue("PUMPOFF", 0);
    }
}