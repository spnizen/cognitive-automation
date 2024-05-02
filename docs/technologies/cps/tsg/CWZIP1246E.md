### Explanation

The storage subsystem is not able to establish a multipath connection.

### Severity - 2

### Symptoms

1. Check for related events in CPS Events page.
2. The Task and Events tab of the ESXi host on the vSphere Client reports the error similar to

        Path redundancy to storage device naa.xxxxxxxxxxxxxx degraded. Path vmhba{a}:C{b}:T{c}:L{d} is down.

3. Check SAN Switch ports status of all four SAN Switches in CPS system.

### Solution

1. raise a TS Case with IBM and upload logs