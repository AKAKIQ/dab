// <yes> <report> JS_ACCESS_CONTROL_TARGET_LINK react10
var TargetBlank = <Link target="_blank" to="https://example.com/"></Link>
// <no> <report>
var TargetBlank = <a target="_blank" rel='noreferrer' href="https://example.com"></a>

function Test1() {
    // <yes> <report> JS_ACCESS_CONTROL_TARGET_LINK react11 <yes> <report> JS_BACKDOOR_NETWORK_ACTIVITY bne002
    return React.createElement('a', {target: '_blank', href: 'https://example.com/'});
}

function Test2() {
    // <yes> <report> JS_BACKDOOR_NETWORK_ACTIVITY bne002
    return React.createElement('a', {target: '_blank', href: 'https://example.com/', rel: "noopener noreferrer"});
}
