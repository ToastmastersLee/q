// One scheduler at the public side of the main (front) entrance, in plan metres.
(function (root) {
    const isTiered = (width, depth, namedHall = false) =>
        width > 0 && depth > 0 && (namedHall || width > 15 || depth > 15);
    function forRoom(width, depth, namedHall = false, doorSide = 'right') {
        if (!isTiered(width, depth, namedHall)) return null;
        const left = doorSide === 'left';
        const doorCenter = Math.min(1.45, depth * .2);
        return { id: 'cpl50', model: 'CPL50', x: left ? 0 : width, y: doorCenter + 1.14,
            mountHeight: 1.38, wallSide: left ? 'left' : 'right' };
    }
    const label = lang => lang === 'zh' ? 'CPL50 · 教室预约屏' : 'CPL50 · Room Scheduler';
    root.RoomScheduler = { forRoom, isTiered, label };
})(globalThis);
